import { useContext, useEffect } from "react";
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
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import { useAds } from "../hooks/useAds";
import { getRecentAds, handleSaveAd, checkIfAdIsSaved } from "../Utils/adUtils";
import {
  DigiIconBookmarkSolid,
  DigiIconBookmarkOutline,
} from "@digi/arbetsformedlingen-react";
import { NavLink } from "react-router-dom";

const ShowRecentAds = () => {
  const [getAdData, allAds] = useAds();
  const { saveAds, dispatch } = useContext(SaveAdsContext);
  const recent = getRecentAds(allAds, 10);

  useEffect(() => {
    getAdData("recent");
  }, [getAdData]);

  return (
    <div className="adsList">
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>Nya annonser</h2>
      </DigiTypography>
      {recent.map((ad) => {
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
                  <NavLink to={`/ad/${ad.id}`}>
                    <p>Läs mer...</p>
                  </NavLink>
                </blockquote>
                <DigiTypographyTime
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

              {isSaved ? (
                <p className="savedText">
                  <b>Sparad</b>
                </p>
              ) : (
                <p className="savedText">
                  <b>Spara</b>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowRecentAds;
