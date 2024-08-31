import { useCallback, useContext } from "react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { getAds } from "../services/AdService";
import { IJobSearchResponse } from "../models/IJobSearchResponse";

export const useAds = () => {
  const { setJobAds } = useContext(JobAdsContext);

  const getAdData = useCallback(
    async (searchText: string, offset: number, limit: number) => {
      try {
        const jobData: IJobSearchResponse = await getAds(
          searchText,
          offset,
          limit
        );
        setJobAds(jobData.hits);
        console.log("Data retrieved:", jobData);
        return jobData.total.value;
      } catch (error) {
        console.error("Error fetching data:", error);
        return 0;
      }
    },
    [setJobAds]
  );
  return [getAdData];
};
