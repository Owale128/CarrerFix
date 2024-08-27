import { IJobAd } from "../models/IJobAd";

interface IDisplayAd {
  jobAd: IJobAd;
}

const DisplayAd = ({ jobAd }: IDisplayAd) => {
  return (
    <div className="card">
      <h2>{jobAd.headline}</h2>
    </div>
  );
};

export default DisplayAd;
