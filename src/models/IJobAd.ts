import { IDescription } from "./IDescription";
import { IEmploymentType } from "./IEmploymentType";
import { IWorkAdress } from "./IWorkAdress";

export interface IJobAd {
  id: string;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: IDescription;
  employment_type: IEmploymentType;
  workPlace_adress: IWorkAdress;
  publication_date: string;
  last_publication_date: string;
}
