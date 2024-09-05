import { createContext } from "react";
import { IJobAd } from "../models/IJobAd";

export interface IJobAdsContext {
  jobAds: IJobAd[];
  setJobAds: (ads: IJobAd[]) => void;
  totalPages: number;
  setTotalPages: (pages: number) => void;
}

export const JobAdsContext = createContext<IJobAdsContext>({
  jobAds: [],
  setJobAds: () => {},
  totalPages: 0,
  setTotalPages: () => {},
});
