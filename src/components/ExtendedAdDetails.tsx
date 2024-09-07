import { IJobAd } from "../models/IJobAd";

interface IExtendedDetailsProps {
  ad?: IJobAd;
}

export const ExtendedAdDetails = ({ ad }: IExtendedDetailsProps) => {
  return (
    <article className="card">
      <div>
        <h2>{ad?.headline}</h2>
        <p>{ad?.description.text}</p>
        <p>Antal lediga platser: {ad?.number_of_vacancies}</p>
      </div>

      <div>
        <p>
          Stad:{" "}
          {ad?.workplace_address?.city
            ? ad.workplace_address.city
            : "Ingen stad angett"}
        </p>
        <p>
          Land:{" "}
          {ad?.workplace_address?.country
            ? ad.workplace_address.country
            : "Inget land angett"}
        </p>
      </div>
    </article>
  );
};
