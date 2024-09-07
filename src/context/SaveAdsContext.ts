import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/SaveAdReducer";
import { IJobAd } from "../models/IJobAd";

export interface IAdsContext {
  saveAds: IJobAd[];
  dispatch: Dispatch<IAction>;
}

export const SaveAdsContext = createContext<IAdsContext>({
  saveAds: [],
  dispatch: () => {
    return;
  },
});
