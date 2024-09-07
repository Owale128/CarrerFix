import { IJobAd } from "../models/IJobAd";

interface IExtendedDetailsProps {
  ad?: IJobAd;
}

export const ExtendedAdDetails = ({ ad }: IExtendedDetailsProps) => {
  return (
    <article className="card">
      <div>
        <h2>{ad?.headline}</h2>
        <p className="description">{ad?.description.text}</p>
        <p className="number"><span className="numberTitle">Antal lediga platser:</span> {ad?.number_of_vacancies}</p>
      </div>

      <div>
        <p className="city">
          <span className="cityTitle">Stad:</span>{" "}
          {ad?.workplace_address?.city
            ? ad.workplace_address.city
            : "Ingen stad angett"}
        </p>
        <p className="country">
          <span className="countryTitle">Land:</span>{" "}
          {ad?.workplace_address?.country
            ? ad.workplace_address.country
            : "Inget land angett"}
        </p>
        <p className="apply">
          <a href={ad?.webpage_url}>Sök NU</a>
        </p>
      </div>
    </article>
  );
};
