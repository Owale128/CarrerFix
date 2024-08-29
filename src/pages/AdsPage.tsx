import { SearchForm } from "../components/SearchForm";
import { useGetJobs } from "../hooks/useGetJobs";
import DisplayAds from "../components/DisplayAds";

const AdPage = () => {
  const [getJobsAds] = useGetJobs();

  return (
    <div>
      <SearchForm getJobAds={getJobsAds} />
      <DisplayAds></DisplayAds>
    </div>
  );
};

export default AdPage;
