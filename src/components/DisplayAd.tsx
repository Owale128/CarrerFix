import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IJobAd } from "../models/IJobAd";
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
import { SaveAdsContext } from "../context/SaveAdsContext";
import {
  DigiIconBookmarkSolid,
  DigiIconBookmarkOutline,
} from "@digi/arbetsformedlingen-react";
import { checkIfAdIsSaved, handleSaveAd } from "../Utils/adUtils";

interface IDisplayAd {
  jobAd: IJobAd;
}

export const DisplayAd = ({ jobAd }: IDisplayAd) => {
  const { saveAds, dispatch } = useContext(SaveAdsContext);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const adIsSaved = checkIfAdIsSaved(jobAd.id, saveAds);
    setIsSaved(adIsSaved);
  }, [saveAds, jobAd.id]);

  return (
    <>
      <div className="showRecentAdsContainer">
        <DigiLayoutBlock
          className="adCard"
          afVariation={LayoutBlockVariation.TERTIARY}
          afContainer={LayoutBlockContainer.NONE}
        >
          <DigiTypography className="typographyContainer">
            <blockquote>
              <h3>{jobAd.headline}</h3>
              <h4>{jobAd.employer.name}</h4>
              <section className="addressSection">
                <p>
                  {jobAd.workplace_address.region
                    ? jobAd.workplace_address.region
                    : "Ingen region angett"}
                </p>
                <p>-</p>
                <p>
                  {jobAd.workplace_address?.country
                    ? jobAd.workplace_address.country
                    : "Inget land angett"}
                </p>
              </section>
            </blockquote>

            <blockquote>
              <NavLink to={`/ad/${jobAd.id}`}>
                <p>Läs mer...</p>
              </NavLink>
            </blockquote>
            <DigiTypographyTime
              afVariation={TypographyTimeVariation.DISTANCE}
              afDateTime={jobAd.publication_date}
            ></DigiTypographyTime>
          </DigiTypography>
        </DigiLayoutBlock>
        <div
          onClick={() => handleSaveAd(jobAd, isSaved, dispatch, () => {})}
          className="bookMarkRecentAds"
        >
          {isSaved ? <DigiIconBookmarkSolid /> : <DigiIconBookmarkOutline />}
          {isSaved ? (
            <p className="savedText">
              <b>Sparad</b>
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};
