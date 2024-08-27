import { IJobAd } from "../models/IJobAd";
import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { get } from "./AdBase";

export const getAds = async (searchText: string): Promise<IJobAd[]> => {
  const response = await get<IJobSearchResponse>(
    `https://jobsearch.api.jobtechdev.se/search?q=${searchText}`
  );
  return response.hits;
};
