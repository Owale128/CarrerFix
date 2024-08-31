import { IJobAd } from "../models/IJobAd";
import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { get } from "./AdBase";

export const getAds = async (
  searchText: string,
  offset: number,
  limit: number
): Promise<IJobSearchResponse> => {
  const response = await get<IJobSearchResponse>(
    `https://jobsearch.api.jobtechdev.se/search?q=${searchText}&offset=${offset}&limit=${limit}`
  );
  return response;
};

export const getAd = async (id: string): Promise<IJobAd> => {
  const response = await get<IJobAd>(
    `https://jobsearch.api.jobtechdev.se/ad/${id}`
  );
  return response;
};
