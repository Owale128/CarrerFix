import { IJobAd } from "../models/IJobAd";
import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { get } from "./AdBase";

export const getAds = async (
  searchText: string
): Promise<IJobSearchResponse> => {
  const response = await get<IJobSearchResponse>(
    `https://jobsearch.api.jobtechdev.se/search?q=${searchText}&limit=100`
  );
  return response;
};

export const getAd = async (id: string): Promise<IJobAd> => {
  const response = await get<IJobAd>(
    `https://jobsearch.api.jobtechdev.se/ad/${id}`
  );
  return response;
};
