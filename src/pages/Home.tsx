import {
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import lunch1 from "../assets/lunch1.png";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { useContext, useEffect } from "react";
import "../sass/infoCard.scss";
import "../sass/homeImg.scss";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
import { truncateText } from "./Utils/textUtils";
import { IJobAd } from "../models/IJobAd";
import { getLatestAds } from "./Utils/adUtils";
>>>>>>> showLatestAd

export const Home = () => {
  const result = useAds();
  const [ getAdData ] = result;
  const { jobAds } = useContext(JobAdsContext);

<<<<<<< HEAD
  const latestAds = [...jobAds].slice(0, 3);
=======
  const latestAds: IJobAd[] = getLatestAds(jobAds, 3);
>>>>>>> showLatestAd

  useEffect(() => {
    getAdData("any", 0, 3); 
  }, [getAdData]);

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <h3>Annonser baserade på dina senaste sökningar</h3>
      <div className="info-cards-container">
        {latestAds.map((ad) => (
<<<<<<< HEAD
          <DigiLayoutBlock
            key={ad.id}
            afVariation={LayoutBlockVariation.PRIMARY}
            afContainer={LayoutBlockContainer.NONE}
            className="latest-ads-card"
          >
            <DigiTypography className="b">
              <h3>{ad.headline}</h3>

              <blockquote>
                <NavLink to={`/ad/${ad.id}`} className="card-link">
                  <p style={{ textDecoration: "underline", color: "blue" }}>
                    Läs mer...
                  </p>
                </NavLink>
              </blockquote>

              <DigiTypographyTime
                style={{ color: "black" }}
                afVariation={TypographyTimeVariation.DISTANCE}
                afDateTime={ad.publication_date}
              ></DigiTypographyTime>
            </DigiTypography>
          </DigiLayoutBlock>
=======
          <DigiInfoCard
            key={ad.id}
            className="infoCard"
            afHeading={ad.headline}
            afHeadingLevel={InfoCardHeadingLevel.H2}
            afType={InfoCardType.TIP}
            afLinkHref={`/ad/${ad.id}`}
            afLinkText="Sök NU"
            afVariation={InfoCardVariation.PRIMARY}
            afSize={InfoCardSize.STANDARD}
          >
           <p>{truncateText(ad.description.text, 100)}</p>
          </DigiInfoCard>
>>>>>>> showLatestAd
        ))}
      </div>
      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
    </>
  );
};
