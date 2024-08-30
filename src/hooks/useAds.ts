import { useContext } from "react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { getAds } from "../services/AdService";

export const useAds = () => {
  const { jobAds, setJobAds } = useContext(JobAdsContext);

  const getAdData = async (searchText: string) => {
    try {
      const jobData = await getAds(searchText);
      setJobAds(jobData);

      console.log("data retreived: ", jobAds);
    } catch (error) {
      console.error("No data found", error);
    }
    if (!jobAds) getAds(searchText);
  };

  return [getAdData];
};
