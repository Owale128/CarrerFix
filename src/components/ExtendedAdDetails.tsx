import { IJobAd } from "../models/IJobAd";

interface IExtendedDetailsProps {
  ad?: IJobAd;
}

export const ExtendedAdDetails = ({ ad }: IExtendedDetailsProps) => {
  return (
    <div>
      <div className="card">
        <h2>{ad?.headline}</h2>
        <p>{ad?.description.text}</p>
        <p>Antal lediga platser: {ad?.number_of_vacancies}</p>
      </div>
    </div>
  );
};
