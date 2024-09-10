import RighArrow from "../assets/arrow-right-circle (1).svg";
import LeftArrow from "../assets/arrow-left-circle (1).svg";
import {
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { IJobAd } from "../models/IJobAd";

const ShowLatestAds = () => {
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [latestAds, setLatestAds] = useState<IJobAd[]>([]);
  const adsPerScroll = 3;

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem("storedAds") || "[]");

    const adsToDisplay = [...storedAds].slice(0, 9);

    if (storedAds.length > 0) {
      setLatestAds(adsToDisplay);
    }
  }, []);

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
  return (
    <>
      {latestAds.length > 0 && (
        <>
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
                      <h4>{ad.employer.name}</h4>
                      <NavLink to={`/ad/${ad.id}`} className="card-link">
                        <p
                          style={{ textDecoration: "underline", color: "blue" }}
                        >
                          Läs mer...
                        </p>
                      </NavLink>
                    </blockquote>

                    <DigiTypographyTime
                      afVariation={TypographyTimeVariation.DISTANCE}
                      afDateTime={ad.publication_date}
                    ></DigiTypographyTime>
                  </DigiTypography>
                </DigiLayoutBlock>
              ))}

              {latestAds.length > adsPerScroll &&
                scrollIndex <
                  Math.floor((latestAds.length - 1) / adsPerScroll) && (
                  <button
                    onClick={handleScroll}
                    className="right-carousel-button"
                  >
                    <img
                      className="arrow-icon"
                      src={RighArrow}
                      alt="right arrow"
                    />
                  </button>
                )}

              {scrollIndex > 0 && (
                <button
                  onClick={() => setScrollIndex(scrollIndex - 1)}
                  className="left-carousel-button"
                >
                  <img
                    className="arrow-icon"
                    src={LeftArrow}
                    alt="left arrow"
                  />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowLatestAds;
