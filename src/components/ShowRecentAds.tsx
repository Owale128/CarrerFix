import { useContext, useEffect } from "react";
import { JobAdsContext } from "../context/JobAdsContext";
import { SaveAdsContext } from "../context/SaveAdsContext";
import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import {
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";
import { truncateText } from "../Utils/textUtils";
import { useAds } from "../hooks/useAds";
import { getRecentAds, handleSaveAd, checkIfAdIsSaved } from "../Utils/adUtils";
import { DigiIconBookmarkSolid, DigiIconBookmarkOutline } from "@digi/arbetsformedlingen-react";

const ShowRecentAds = () => {
    const [getAdData] = useAds();
    const { jobAds } = useContext(JobAdsContext);
    const { saveAds, dispatch } = useContext(SaveAdsContext);
    const recentAds = getRecentAds(jobAds, 3);

    useEffect(() => {
        getAdData("recent", 0, 3); 
    }, [getAdData]);

    return (
            <div className="container">
                <h3 style={{marginTop: '3rem'}}>Senast upplagda annonser</h3>
                {recentAds.map((ad) => {
                    const isSaved = checkIfAdIsSaved(ad.id, saveAds);

                    return (
                        <div key={ad.id} className="showRecentAdsContainer">
                            <DigiInfoCard
                                className="infoCard"
                                afHeading={ad.headline}
                                afHeadingLevel={InfoCardHeadingLevel.H2}
                                afType={InfoCardType.TIP}
                                afLinkHref={`/ad/${ad.id}`}
                                afLinkText="Läs mer..."
                                afVariation={InfoCardVariation.PRIMARY}
                                afSize={InfoCardSize.STANDARD} 
                            >
                                <p>{truncateText(ad.description.text, 100)}</p>
                            </DigiInfoCard>
                            <div
                                onClick={() => handleSaveAd(ad, isSaved, dispatch, () => {})}
                                className="bookMarkRecentAds"
                            >
                                {isSaved ? <DigiIconBookmarkSolid /> : <DigiIconBookmarkOutline />}
                            </div>
                        </div>
                    );
                })}
            </div>
    );
}

export default ShowRecentAds;
