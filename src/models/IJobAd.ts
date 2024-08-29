import { IDescription } from "./IDescription";

export interface IJobAd {
  id: string;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: IDescription;
}
