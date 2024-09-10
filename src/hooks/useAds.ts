import { useCallback, useState } from "react";
import { getAds } from "../services/AdService";
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
        const jobData: IJobSearchResponse = await getAds(searchText);
        setAllAds(jobData.hits);
        setTotalCount(jobData.total.value);
        return { ads: jobData.hits, totalCount: jobData.total.value };
      } catch (error) {
        console.error("Error fetching data:", error);
        return {
          ads: [],
          totalCount: 0,
        };
      }
    },
    []
  );

  return [getAdData, allAds, totalCount] as const;
};
