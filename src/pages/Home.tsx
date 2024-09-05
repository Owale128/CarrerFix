import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import lunch1 from "../assets/lunch1.png";
import ShowRecentAds from "../components/ShowRecentAds";
import SuggestedAds from "../components/SuggestedAds";

export const Home = () => {
  const [getAdData] = useAds();

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <div>
        <SuggestedAds />
      </div>
      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
      <div>
        <ShowRecentAds />
      </div>
    </>
  );
};
