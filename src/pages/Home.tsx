import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import {
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";
import lunch1 from "../assets/lunch1.png";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { useContext, useEffect } from "react";
import "../sass/infoCard.scss";
import "../sass/homeImg.scss";
import { truncateText } from "./Utils/textUtils";
import { IJobAd } from "../models/IJobAd";
import { getLatestAds } from "./Utils/adUtils";

export const Home = () => {
  const result = useAds();
  const [ getAdData ] = result;
  const { jobAds } = useContext(JobAdsContext);

  const latestAds: IJobAd[] = getLatestAds(jobAds, 3);

  useEffect(() => {
    getAdData("any", 0, 3); 
  }, [getAdData]);

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <div className="info-cards-container">
        {latestAds.map((ad) => (
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
        ))}
      </div>
      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
    </>
  );
};
