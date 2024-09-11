import RighArrow from "../assets/arrow-right-circle (1).svg";
import LeftArrow from "../assets/arrow-left-circle (1).svg";
import {
  DigiIconBookmarkOutline,
  DigiIconBookmarkSolid,
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyTimeVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { IJobAd } from "../models/IJobAd";
import { checkIfAdIsSaved, handleSaveAd } from "../Utils/adUtils";
import { SaveAdsContext } from "../context/SaveAdsContext";

const ShowLatestAds = () => {
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [latestAds, setLatestAds] = useState<IJobAd[]>([]);
  const { saveAds, dispatch } = useContext(SaveAdsContext);
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
          <div className="carouselWrapper">
            <DigiTypography afVariation={TypographyVariation.SMALL}>
              <h2>Annonser baserade på dina senaste sökningar</h2>
            </DigiTypography>
            <div className={`suggestedAdsCardContainer scroll-${scrollIndex}`}>
              {latestAds.map((ad) => {
                const isSaved = checkIfAdIsSaved(ad.id, saveAds);
                return (
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
                        <NavLink to={`/ad/${ad.id}`}>
                          <p>Läs mer...</p>
                        </NavLink>
                      </blockquote>

                      <DigiTypographyTime
                        afVariation={TypographyTimeVariation.DISTANCE}
                        afDateTime={ad.publication_date}
                      ></DigiTypographyTime>

                      <div
                        onClick={() =>
                          handleSaveAd(ad, isSaved, dispatch, () => {})
                        }
                        className="bookMarkRecentAds"
                      >
                        {isSaved ? (
                          <DigiIconBookmarkSolid />
                        ) : (
                          <DigiIconBookmarkOutline />
                        )}

                        {isSaved ? (
                          <p className="savedText">
                            <b>Sparad</b>
                          </p>
                        ) : (
                          <p className="savedText">
                            <b>Spara</b>
                          </p>
                        )}
                      </div>
                    </DigiTypography>
                  </DigiLayoutBlock>
                );
              })}

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
