import { useContext } from "react";
import { SearchForm } from "../components/SearchForm";
import { getAds } from "../services/AdService";
import { JobAdsContext } from "../contexts/JobAdsContext";
import DisplayAds from "../components/DisplayAds";

export const Home = () => {
  const { jobAds, setJobAds } = useContext(JobAdsContext);

  const getJobsAds = async (searchText: string) => {
    try {
      const jobData = await getAds(searchText);
      setJobAds(jobData);

      console.log("data retreived: ", jobAds);
    } catch (error) {
      console.error("No data found", error);
    }
  };

  return (
    <>
      <SearchForm getJobAds={getJobsAds} />
      <DisplayAds></DisplayAds>
    </>
  );
};
