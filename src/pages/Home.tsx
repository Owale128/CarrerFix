import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import { SearchForm } from "../components/SearchForm";

import { useAds } from "../hooks/useAds";
import {
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";

export const Home = () => {
  const [getAdData] = useAds();

  return (
    <>
      <DigiInfoCard
        afHeading="Jag är ett infokort"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.TIP}
        afLinkHref="Frivillig länk"
        afLinkText="Sök NU"
        afVariation={InfoCardVariation.PRIMARY}
        afSize={InfoCardSize.STANDARD}
      >
        <p>
          Det här är bara ord för att illustrera hur det ser ut med text inuti.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          commodo egestas elit in consequat. Proin in ex consectetur, laoreet
          augue sit amet, malesuada tellus.
        </p>
      </DigiInfoCard>
      <DigiInfoCard
        afHeading="Jag är ett infokort"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.TIP}
        afLinkHref="Frivillig länk"
        afLinkText="Sök NU"
        afVariation={InfoCardVariation.PRIMARY}
        afSize={InfoCardSize.STANDARD}
      >
        <p>
          Det här är bara ord för att illustrera hur det ser ut med text inuti.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          commodo egestas elit in consequat. Proin in ex consectetur, laoreet
          augue sit amet, malesuada tellus.
        </p>
      </DigiInfoCard>
      <DigiInfoCard
        afHeading="Jag är ett infokort"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.TIP}
        afLinkHref="Frivillig länk"
        afLinkText="Sök NU"
        afVariation={InfoCardVariation.PRIMARY}
        afSize={InfoCardSize.STANDARD}
      >
        <p>
          Det här är bara ord för att illustrera hur det ser ut med text inuti.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          commodo egestas elit in consequat. Proin in ex consectetur, laoreet
          augue sit amet, malesuada tellus.
        </p>
      </DigiInfoCard>
      <SearchForm getAdData={getAdData} />
    </>
  );
};
