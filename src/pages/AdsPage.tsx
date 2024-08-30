import { SearchForm } from "../components/SearchForm";
import { useGetJobs } from "../hooks/useGetJobs";
import DisplayAds from "../components/DisplayAds";

const AdPage = () => {
  const [getAds] = useGetJobs();

  return (
    <div>
      <SearchForm getAds={getAds} />
      <DisplayAds></DisplayAds>
    </div>
  );
};

export default AdPage;
