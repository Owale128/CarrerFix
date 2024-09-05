import { IJobAd } from "../models/IJobAd";
import { Dispatch } from "react";
import { IAction, ActionType } from "../reducers/SaveAdRecucer";

export const getRecentAds = (jobAds: IJobAd[], count: number): IJobAd[] => {
  return [...jobAds]
    .sort((a, b) => {
      const dateA = new Date(a.publication_date).getTime();
      const dateB = new Date(b.publication_date).getTime();
      return dateB - dateA;
    })
    .slice(0, count);
};

export const handleSaveAd = (
  jobAd: IJobAd,
  isSaved: boolean,
  dispatch: Dispatch<IAction>,
  setIsSaved: (isSaved: boolean) => void
) => {
  if (isSaved) {
    dispatch({ type: ActionType.REMOVE_AD, payload: jobAd.id });
  } else {
    dispatch({ type: ActionType.ADD_AD, payload: jobAd });
  }
  setIsSaved(!isSaved);
};

export const checkIfAdIsSaved = (adId: string, savedAds: IJobAd[]): boolean => {
  return savedAds.some(ad => ad.id === adId);
};