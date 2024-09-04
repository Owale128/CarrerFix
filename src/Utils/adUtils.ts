import { IJobAd } from "../models/IJobAd";

export const getLatestAds = (jobAds: IJobAd[], count: number): IJobAd[] => {
  return [...jobAds]
    .sort((a, b) => {
      const dateA = new Date(a.publication_date).getTime();
      const dateB = new Date(b.publication_date).getTime();
      return dateB - dateA;
    })
    .slice(0, count);
};
