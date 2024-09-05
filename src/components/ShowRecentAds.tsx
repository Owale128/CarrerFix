import { useContext, useEffect } from "react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import {
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";
import { truncateText } from "../Utils/textUtils";
import { useAds } from "../hooks/useAds";
import { getRecentAds } from "../Utils/adUtils";

const ShowRecentAds = () => {
  const [getAdData] = useAds();
  const { jobAds } = useContext(JobAdsContext);
  const recentAds = getRecentAds(jobAds, 3);

  useEffect(() => {
    getAdData("recent", 0, 3);
  }, [getAdData]);

  return (
    <>
      <div>
        {recentAds.map((ad) => (
          <>
            {/*  <p>{ad.headline}</p> */}
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
          </>
        ))}
      </div>
    </>
  );
};

export default ShowRecentAds;
