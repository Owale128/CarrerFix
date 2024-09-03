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
import { useContext } from "react";
import "../sass/infoCard.scss";
import "../sass/homeImg.scss";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [getAdData] = useAds();
  const { jobAds } = useContext(JobAdsContext);

  const latestAds = [...jobAds].slice(0, 3);

  console.log(latestAds);

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <h3>Annonser baserade på dina senaste sökningar</h3>
      <div className="info-cards-container">
        {latestAds.map((ad) => (
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
        ))}
      </div>
      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
    </>
  );
};
