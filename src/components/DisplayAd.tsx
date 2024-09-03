import { NavLink } from "react-router-dom";
import { IJobAd } from "../models/IJobAd";
import { DigiTypographyTime } from "@digi/arbetsformedlingen-react";
import { TypographyTimeVariation } from "@digi/arbetsformedlingen";
import '../sass/card.scss'

interface IDisplayAd {
  jobAd: IJobAd;
}

export const DisplayAd = ({ jobAd }: IDisplayAd) => {
  return (
    <article className="card">
      <NavLink to={`/ad/${jobAd.id}`} className="card-link">
        <h2>{jobAd.headline}</h2>
      <p style={{textDecoration: 'underline', color: 'blue'}}>Läs mer...</p>
      </NavLink>

      <div>
        <p>Datum för publicering: </p>
        <DigiTypographyTime
          style={{ color: "black" }}
          afVariation={TypographyTimeVariation.DISTANCE}
          afDateTime={jobAd.publication_date}
        ></DigiTypographyTime>
      </div>
    </article>
  );
};
