import { IJobAd } from "./IJobAd";

export interface IJobSearchResponse {
  total: { value: number };
  positions: number;
  hits: IJobAd[];
}
