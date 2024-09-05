import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IJobAd } from "../models/IJobAd";
import { DigiTypographyTime } from "@digi/arbetsformedlingen-react";
import { TypographyTimeVariation } from "@digi/arbetsformedlingen";
import { SaveAdsContext } from "../context/SaveAdsContext";
import {DigiIconBookmarkSolid, DigiIconBookmarkOutline } from "@digi/arbetsformedlingen-react";
import { checkIfAdIsSaved, handleSaveAd } from "../Utils/adUtils";

interface IDisplayAd {
  jobAd: IJobAd;
}

export const DisplayAd = ({ jobAd}: IDisplayAd) => {
  const {saveAds, dispatch } = useContext(SaveAdsContext);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const adIsSaved = checkIfAdIsSaved(jobAd.id, saveAds);
    setIsSaved(adIsSaved);
  }, [saveAds, jobAd.id]);

  return (
    <>
    <article className="card">
      <NavLink to={`/ad/${jobAd.id}`} className="card-link">
        <h2>{jobAd.headline}</h2>
        <p className="readMore">Läs mer...</p>
      </NavLink>
      <div
      onClick={() => handleSaveAd(jobAd, isSaved, dispatch, setIsSaved)}
      className='bookMark'
      >
     {isSaved ? <DigiIconBookmarkSolid /> : <DigiIconBookmarkOutline />}
    </div>
      <div>
        <p className="date">Datum för publicering: </p>
        <DigiTypographyTime
          afVariation={TypographyTimeVariation.DISTANCE}
          afDateTime={jobAd.publication_date}
          ></DigiTypographyTime>
      </div>
    </article>
          </>
  );
};
