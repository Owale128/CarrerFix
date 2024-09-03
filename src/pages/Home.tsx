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
import { useContext } from "react";
import "../sass/infoCard.scss";
import "../sass/homeImg.scss";

export const Home = () => {
  const [getAdData] = useAds();
  const { jobAds } = useContext(JobAdsContext);

  const latestAds = [...jobAds].slice(0, 9);

  console.log(latestAds);

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <div className="info-cards-container">
        <DigiInfoCard
          className="infoCard"
          afHeading="Jag är ett infokort"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="Frivillig länk"
          afLinkText="Sök NU"
          afVariation={InfoCardVariation.PRIMARY}
          afSize={InfoCardSize.STANDARD}
        >
          <p>
            Tjoooo. Det här är bara ord för att illustrera hur det ser ut med
            text inuti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse commodo egestas elit in consequat. Proin in ex
            consectetur, laoreet augue sit amet, malesuada tellus.
          </p>
        </DigiInfoCard>
        <DigiInfoCard
          className="infoCard"
          afHeading="Jag är ett infokort"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="Frivillig länk"
          afLinkText="Sök NU"
          afVariation={InfoCardVariation.PRIMARY}
          afSize={InfoCardSize.STANDARD}
        >
          <p>
            Det här är bara ord för att illustrera hur det ser ut med text
            inuti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse commodo egestas elit in consequat. Proin in ex
            consectetur, laoreet augue sit amet, malesuada tellus.
          </p>
        </DigiInfoCard>
        <DigiInfoCard
          className="infoCard"
          afHeading="Jag är ett infokort"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afLinkHref="Frivillig länk"
          afLinkText="Sök NU"
          afVariation={InfoCardVariation.PRIMARY}
          afSize={InfoCardSize.STANDARD}
        >
          <p>
            Det här är bara ord för att illustrera hur det ser ut med text
            inuti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse commodo egestas elit in consequat. Proin in ex
            consectetur, laoreet augue sit amet, malesuada tellus.
          </p>
        </DigiInfoCard>

        {/*
        {latestAds.map((ad) => (
          <p>{ad.headline}</p>
        ))}
        */}
      </div>
      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
    </>
  );
};
