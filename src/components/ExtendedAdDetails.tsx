import DOMPurify from "dompurify";
import {
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLinkButton,
  DigiLinkExternal,
  DigiMediaImage,
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
  LinkButtonSize,
  LinkButtonVariation,
  LinkVariation,
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
      {ad.logo_url && (
        <div className="employerLogoContainer">
          <DigiMediaImage
            className="employerLogo"
            afUnlazy
            afHeight="100"
            afWidth="200"
            afSrc={ad.logo_url}
            afAlt={ad.employer.name}
          ></DigiMediaImage>
        </div>
      )}
      <DigiLayoutBlock
        className="extendedAdCard"
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.NONE}
      >
        <DigiTypography>
          <blockquote className="company">
            <h1>{ad.headline}</h1>
            <h2>{ad.employer.name}</h2>
            <h3>{ad.occupation_field.label}</h3>
          </blockquote>

          <blockquote className="employmentInfoSection">
            <p>Antal lediga platser: {ad.number_of_vacancies}</p>
            <p>Omfattning: {ad.employment_type.label}</p>
            <p>Varaktighet: {ad.duration.label}</p>
            <p>
              <b>
                Ansök senast:
                <span>
                  {" "}
                  <DigiTypographyTime
                    afVariation={TypographyTimeVariation.PRIMARY}
                    afDateTime={ad.application_deadline}
                  ></DigiTypographyTime>
                </span>
              </b>
            </p>
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

          <DigiInfoCard
        className="contactSection"
        afHeading="Kontakta arbetsgivaren"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.RELATED}
        afVariation={InfoCardVariation.SECONDARY}
        afSize={InfoCardSize.STANDARD}
      >
        <DigiTypography>
          <blockquote className="employer">
            <p>Ansök via arbetsgivarens hemsida:</p>
            {ad.application_details.url ? (
              <DigiLinkExternal
                afHref={ad.application_details.url}
                afTarget="_blank"
                afVariation={LinkVariation.SMALL}
              >
                {ad.employer.name}
              </DigiLinkExternal>
            ) : (
              <p>Ingen webbplats tillgänglig</p>
            )}
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

          <blockquote className="digiLinkButton">
            <DigiLinkButton
              afHref={ad.application_details.url}
              afSize={LinkButtonSize.LARGE}
              afVariation={LinkButtonVariation.PRIMARY}
            >
              Ansök nu
            </DigiLinkButton>
          </blockquote>

          <blockquote className="dateSection">
            <p>
              Datum för publicering:{" "}
              <span>
                <DigiTypographyTime
                  afVariation={TypographyTimeVariation.PRIMARY}
                  afDateTime={ad.publication_date}
                ></DigiTypographyTime>
              </span>
            </p>
          </blockquote>
        </DigiTypography>
      </DigiLayoutBlock>  
    </div>
  );
};
