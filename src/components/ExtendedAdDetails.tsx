import DOMPurify from "dompurify";
import {
  DigiButton,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { IJobAd } from "../models/IJobAd";
import {
  ButtonSize,
  ButtonVariation,
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";

interface IExtendedDetailsProps {
  ad?: IJobAd;
}

export const ExtendedAdDetails = ({ ad }: IExtendedDetailsProps) => {
  if (!ad) {
    return <p>Ingen annons tillgänglig.</p>;
  }

  const sanitizedDescription = DOMPurify.sanitize(
    ad.description?.text_formatted
  );
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
                  sanitizedDescription || "<p>No description available.</p>",
              }}
            />
          </blockquote>

          <blockquote className="qualificationSection">
            <DigiInfoCard
              afHeading="Kvalifikationer och krav"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.TIP}
              afVariation={InfoCardVariation.SECONDARY}
              afSize={InfoCardSize.STANDARD}
            >
              <blockquote>
                {ad.experience_required ? (
                  <p>Erfarenhet krävs</p>
                ) : (
                  <p>Ingen erfarenhet krävs</p>
                )}
                {ad.driving_license_required ? (
                  <p>Krav på körkort</p>
                ) : (
                  <p>Inget krav på körkort</p>
                )}
                {ad.access_to_own_car ? (
                  <p>Tillgång till egen bil</p>
                ) : (
                  <p>Ingen egen bil behövs</p>
                )}
              </blockquote>
            </DigiInfoCard>
          </blockquote>

          <blockquote>
            <DigiButton
              afSize={ButtonSize.LARGE}
              afVariation={ButtonVariation.PRIMARY}
              afFullWidth={false}
            >
              <a className="applyLink" href={ad.application_details.url}>
                Sök nu
              </a>
            </DigiButton>
          </blockquote>

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
        className="contactSection"
        afHeading="kontakt och adress"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.RELATED}
        afVariation={InfoCardVariation.SECONDARY}
        afSize={InfoCardSize.STANDARD}
        af-border-position="left"
      >
        <DigiTypography>
          <blockquote>
            <p>
              <b>Ansök via arbetsgivarens hemsida:</b>{" "}
              {ad.application_details?.url ? (
                <a
                  href={ad.application_details.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ad.application_details.url}
                </a>
              ) : (
                "Ingen hemsida tillgänglig"
              )}
            </p>
          </blockquote>

          <blockquote className="locationSection">
            <p>
              <span>
                <b>Land:</b>
              </span>{" "}
              {ad.workplace_address.country
                ? ad.workplace_address.country
                : "Inget land angett"}
            </p>
            <p>
              <span>
                <b>Stad:</b>
              </span>{" "}
              {ad.workplace_address.city
                ? ad.workplace_address.city
                : "Ingen stad angett"}
            </p>

            <p>
              <span>
                <b>Kommun:</b>
              </span>{" "}
              {ad.workplace_address.municipality
                ? ad.workplace_address.municipality
                : "Ingen kommun angett"}
            </p>

            <p>
              <span>
                <b>Region:</b>
              </span>{" "}
              {ad.workplace_address.region
                ? ad.workplace_address.region
                : "Ingen region angett"}
            </p>
          </blockquote>
        </DigiTypography>
      </DigiInfoCard>
    </div>
  );
};
