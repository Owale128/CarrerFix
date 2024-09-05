import { useCallback, useContext } from "react";
import { JobAdsContext } from "../context/JobAdsContext";
import { getAds } from "../services/AdService";
import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { IJobAd } from "../models/IJobAd";

interface GetAdDataResult {
  ads: IJobAd[];
  totalCount: number;
}

export const useAds = () => {
  const { setJobAds } = useContext(JobAdsContext);

  const getAdData = useCallback(
    async (
      searchText: string,
      offset: number,
      limit: number
    ): Promise<GetAdDataResult> => {
      try {
        const jobData: IJobSearchResponse = await getAds(
          searchText,
          offset,
          limit
        );
        setJobAds(jobData.hits);
        console.log("Data retrieved:", jobData);
        return {
          ads: jobData.hits,
          totalCount: jobData.total.value,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
        return {
          ads: [],
          totalCount: 0,
        };
      }
    },
    [setJobAds]
  );
  return [getAdData] as const;
};
