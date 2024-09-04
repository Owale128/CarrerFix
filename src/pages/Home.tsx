import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import lunch1 from "../assets/lunch1.png";
import ShowRecentAds from "../components/ShowRecentAds";
import ShowLatestAds from "../components/ShowLatestAds";

export const Home = () => {;
  const [getAdData] = useAds();

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <div>
        <ShowLatestAds />
      </div>
      <div>
         <ShowRecentAds />
      </div>
      <div className="image-container">
        <img src={lunch1} alt="Lunch 1" className="lunchImg" />
      </div>
    </>
  );
};
