import { createContext, Dispatch } from "react";

import { IJobAd } from "../models/IJobAd";
import { IAction } from "../reducers/SaveAdRecucer";

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
