import { NavLink } from "react-router-dom";
import { IJobAd } from "../models/IJobAd";

interface IDisplayAd {
  jobAd: IJobAd;
}

const DisplayAd = ({ jobAd }: IDisplayAd) => {
  return (
    <div className="card">
      <NavLink to={"/ad/" + jobAd.id} className="card-link">
        <h2>{jobAd.headline}</h2>
      </NavLink>
      <p>{jobAd.description.text}</p>
      <p>Läs mer...</p>
    </div>
  );
};

export default DisplayAd;
