import {
  DigiInfoCard,
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { IJobAd } from "../models/IJobAd";
import {
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";

interface IExtendedDetailsProps {
  ad: IJobAd;
}

export const ExtendedAdDetails = ({ ad }: IExtendedDetailsProps) => {
  return (
    <div className="extendedAdContainer">
      <DigiLayoutBlock
        className="extendedAdCard"
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.NONE}
      >
        <DigiTypography>
          <blockquote>
            <h1>{ad.headline}</h1>
            <h3>{ad.employer.name}</h3>
          </blockquote>

          <blockquote className="employmentInfoSection">
            <p>Antal lediga platser: {ad.number_of_vacancies}</p>
            <p>Omfattning: {ad.employment_type.label}</p>
            <p>Varaktighet: {ad.duration.label}</p>
          </blockquote>

          <blockquote className="descriptionSection">
            <h2>Om jobbet</h2>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html:
                  ad.description?.text_formatted ||
                  "<p>No description available.</p>",
              }}
            />
          </blockquote>

          <section className="qualificationSection">
            <DigiInfoCard
              afHeading="Kvalifikationer och krav"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.TIP}
              afVariation={InfoCardVariation.SECONDARY}
              afSize={InfoCardSize.STANDARD}
            ></DigiInfoCard>
          </section>
          <blockquote className="locationSection">
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
          </blockquote>

          <p className="apply">
            <a href={ad.application_details.url}>Sök nu</a>
          </p>

          <blockquote className="dateSection">
            <p>Datum för publicering: </p>
            <DigiTypographyTime
              afVariation={TypographyTimeVariation.PRIMARY}
              afDateTime={ad.publication_date}
            ></DigiTypographyTime>
          </blockquote>
        </DigiTypography>
      </DigiLayoutBlock>

      <DigiInfoCard
        afHeading="Kontaktuppgifter"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.RELATED}
        afVariation={InfoCardVariation.PRIMARY}
        afSize={InfoCardSize.STANDARD}
      ></DigiInfoCard>
    </div>
  );
};
