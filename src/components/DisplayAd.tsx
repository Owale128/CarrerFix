import { NavLink } from "react-router-dom";
import { IJobAd } from "../models/IJobAd";

interface IDisplayAd {
  jobAd: IJobAd;
}

export const DisplayAd = ({ jobAd }: IDisplayAd) => {
  return (
    <div className="card">
      <NavLink to={`/ad/${jobAd.id}`} className="card-link">
        <h2>{jobAd.headline}</h2>
      </NavLink>
      <p>Läs mer...</p>
      <p>Datum: {jobAd.publication_date}</p>
    </div>
  );
};
