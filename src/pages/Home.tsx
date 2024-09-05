import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import worker from "../assets/construction-worker-569126.jpg";
import ShowRecentAds from "../components/ShowRecentAds";
import SuggestedAds from "../components/SuggestedAds";

export const Home = () => {
  const [getAdData] = useAds();

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <SuggestedAds />
      <div className="image-container">
        <img src={worker} alt="worker" className="workerImg" />
      </div>
      <div>
        <ShowRecentAds />
      </div>
    </>
  );
};
