import { useCallback, useState } from "react";
import { getAds } from "../services/AdService";
import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { IJobAd } from "../models/IJobAd";

interface GetAdDataResult {
  ads: IJobAd[];
}

export const useAds = () => {
  const [allAds, setAllAds] = useState<IJobAd[]>([]);
  const getAdData = useCallback(
    async (searchText: string): Promise<GetAdDataResult> => {
      try {
        const jobData: IJobSearchResponse = await getAds(searchText);
        setAllAds(jobData.hits);
        return { ads: jobData.hits,};
      } catch (error) {
        console.error("Error fetching data:", error);
        return {
          ads: [],
        };
      }
    },
    []
  );

  return [getAdData, allAds, setAllAds] as const;
};
