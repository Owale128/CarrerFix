import { IJobAd } from "./IJobAd";

export interface IJobSearchResponse {
  total: { value: string };
  positions: number;
  hits: IJobAd[];
}
