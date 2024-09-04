import RighArrow from "../assets/arrow-right-circle (1).svg";
import LeftArrow from "../assets/arrow-left-circle (1).svg";
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
import { useContext, useEffect, useState } from "react";
import "../sass/infoCard.scss";
import "../sass/homeImg.scss";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const result = useAds();
  const [getAdData] = result;
  const { jobAds } = useContext(JobAdsContext);
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const latestAds = [...jobAds].slice(0, 9);

  const handleScroll = () => {
    setScrollIndex((prevIndex) => {
      const maxIndex = 2;
      if (prevIndex < maxIndex) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  /* useEffect(() => {
    getAdData("any", 0, 3);
  }, [getAdData]);

  */

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <h3>Annonser baserade på dina senaste sökningar</h3>
      <div className="carousel-wrapper">
        <div className={`latest-ads-cards-container scroll-${scrollIndex}`}>
          {latestAds.map((ad) => (
            <DigiLayoutBlock
              key={ad.id}
              afVariation={LayoutBlockVariation.PRIMARY}
              afContainer={LayoutBlockContainer.NONE}
              className="latest-ads-card"
            >
              <DigiTypography>
                <blockquote>
                  <h3>{ad.headline}</h3>
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

          {scrollIndex < 2 && (
            <button onClick={handleScroll} className="right-carousel-button">
              <img className="arrow-icon" src={RighArrow} alt="right arrow" />
            </button>
          )}

          {scrollIndex > 0 && (
            <button
              onClick={() => setScrollIndex(scrollIndex - 1)}
              className="left-carousel-button"
            >
              <img className="arrow-icon" src={LeftArrow} alt="left arrow" />
            </button>
          )}
        </div>
      </div>

      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
    </>
  );
};
