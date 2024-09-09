import { useContext, useEffect } from "react";
import { JobAdsContext } from "../context/JobAdsContext";
import { SaveAdsContext } from "../context/SaveAdsContext";
import {
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import { useAds } from "../hooks/useAds";
import { getRecentAds, handleSaveAd, checkIfAdIsSaved } from "../Utils/adUtils";
import {
  DigiIconBookmarkSolid,
  DigiIconBookmarkOutline,
} from "@digi/arbetsformedlingen-react";
import { NavLink } from "react-router-dom";

const ShowRecentAds = () => {
  const [getAdData] = useAds();
  const { jobAds } = useContext(JobAdsContext);
  const { saveAds, dispatch } = useContext(SaveAdsContext);
  const recentAds = getRecentAds(jobAds, 10);

  useEffect(() => {
    getAdData("recent", 0, 10);
  }, [getAdData]);

  return (
    <div className="container" title="Sök Nu">
      <h3 className="latestAdsHeading">Senast upplagda annonser</h3>
      {recentAds.map((ad) => {
        const isSaved = checkIfAdIsSaved(ad.id, saveAds);

        return (
          <div key={ad.id} className="showRecentAdsContainer">
            <DigiLayoutBlock
              className="adCard"
              afVariation={LayoutBlockVariation.PRIMARY}
              afContainer={LayoutBlockContainer.NONE}
            >
              <DigiTypography>
                <blockquote>
                  <h3>{ad.headline}</h3>
                  <h4>{ad.employer.name}</h4>
                  <section className="addressSection">
                    <p>
                      {ad?.workplace_address?.region
                        ? ad.workplace_address.region
                        : "Ingen region angett"}
                    </p>
                    <p>-</p>
                    <p>
                      {ad?.workplace_address?.country
                        ? ad.workplace_address.country
                        : "Inget land angett"}
                    </p>
                  </section>
                </blockquote>

                <blockquote>
                  <NavLink to={`/ad/${ad.id}`} className="card-link">
                    <p>
                      Läs mer...
                    </p>
                  </NavLink>
                </blockquote>
                <DigiTypographyTime
                  style={{ color: "black" }}
                  afVariation={TypographyTimeVariation.DISTANCE}
                  afDateTime={ad.publication_date}
                ></DigiTypographyTime>
              </DigiTypography>
            </DigiLayoutBlock>
            <div
              onClick={() => handleSaveAd(ad, isSaved, dispatch, () => {})}
              className="bookMarkRecentAds"
            >
              {isSaved ? (
                <DigiIconBookmarkSolid />
              ) : (
                <DigiIconBookmarkOutline />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowRecentAds;
