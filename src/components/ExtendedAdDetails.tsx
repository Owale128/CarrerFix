import {
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { IJobAd } from "../models/IJobAd";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";

interface IExtendedDetailsProps {
  ad: IJobAd;
}

export const ExtendedAdDetails = ({ ad }: IExtendedDetailsProps) => {
  return (
    <DigiLayoutBlock
      className="adCard"
      afVariation={LayoutBlockVariation.PRIMARY}
      afContainer={LayoutBlockContainer.NONE}
    >
      <DigiTypography>
        <blockquote>
          <h1>{ad.headline}</h1>
          <h3>{ad.employer.name}</h3>
        </blockquote>

        <blockquote>
          <DigiTypographyTime
            style={{ color: "black" }}
            afVariation={TypographyTimeVariation.DISTANCE}
            afDateTime={ad.publication_date}
          ></DigiTypographyTime>
        </blockquote>

        <p className="description">{ad.description.text}</p>
        <p className="number">
          <span className="numberTitle">Antal lediga platser:</span>{" "}
          {ad.number_of_vacancies}
        </p>

        <section className="locationSection">
          <p className="city">
            <span className="cityTitle">Stad:</span>{" "}
            {ad.workplace_address.city
              ? ad.workplace_address.city
              : "Ingen stad angett"}
          </p>
          <p className="country">
            <span className="countryTitle">Land:</span>{" "}
            {ad.workplace_address.country
              ? ad.workplace_address.country
              : "Inget land angett"}
          </p>
        </section>

        <p className="apply">
          <a href={ad.webpage_url}>Sök nu</a>
        </p>
      </DigiTypography>
    </DigiLayoutBlock>
  );
};
