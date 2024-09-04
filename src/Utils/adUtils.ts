import { IJobAd } from "../models/IJobAd";

export const getRecentAds = (jobAds: IJobAd[], count: number): IJobAd[] => {
  return [...jobAds]
    .sort((a, b) => {
      const dateA = new Date(a.publication_date).getTime();
      const dateB = new Date(b.publication_date).getTime();
      return dateB - dateA;
    })
    .slice(0, count);
};

/* export const getLatestSearchedAds = (searchResults: IJobAd[], count: number): IJobAd[] => {
  return [...searchResults]
    .slice(0, count);
}; */