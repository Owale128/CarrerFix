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
          <div className="carouselWrapper">
            <div className={`suggestedAdsCardContainer scroll-${scrollIndex}`}>
              {latestAds.map((ad) => (
                <DigiLayoutBlock
                  key={ad.id}
                  afVariation={LayoutBlockVariation.PRIMARY}
                  afContainer={LayoutBlockContainer.NONE}
                  className="suggestedAdsCard"
                >
                  <DigiTypography>
                    <blockquote>
                      <h3>{ad.headline}</h3>
                      <h4>{ad.employer.name}</h4>
                      <NavLink to={`/ad/${ad.id}`} className="card-link">
                        <p>Läs mer...</p>
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
                    className="rightCarouselButton"
                  >
                    <img
                      className="arrowIcon"
                      src={RighArrow}
                      alt="right arrow"
                    />
                  </button>
                )}

              {scrollIndex > 0 && (
                <button
                  onClick={() => setScrollIndex(scrollIndex - 1)}
                  className="leftCarouselButton"
                >
                  <img className="arrowIcon" src={LeftArrow} alt="left arrow" />
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
