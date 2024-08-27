import { IDescription } from "./IDescription";

export interface IJobAd {
  id: number;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: IDescription;
}
