import { IJobAd } from "./IJobAd";

export interface IJobSearchResponse {
  positions: number;
  hits: IJobAd[];
}
