import { useCallback, useState } from "react";
import { getAds } from "../services/AdService"; // Ensure this service function handles pagination properly
import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { IJobAd } from "../models/IJobAd";

interface GetAdDataResult {
  ads: IJobAd[];
  totalCount: number;
}

export const useAds = () => {
  const [allAds, setAllAds] = useState<IJobAd[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getAdData = useCallback(
    async (searchText: string): Promise<GetAdDataResult> => {
      try {
        const jobData: IJobSearchResponse = await getAds(searchText); // Ensure this call is correct
        setAllAds(jobData.hits);
        setTotalCount(jobData.total.value);
        return { ads: jobData.hits, totalCount: jobData.total.value };
      } catch (error) {
        console.error("Error fetching data:", error);
        return { ads: [], totalCount: 0 }; // Return empty data in case of an error
      }
    },
    []
  );

  return [getAdData, allAds, totalCount] as const;
};
