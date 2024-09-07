import { IDescription } from "./IDescription";
import { IEmployerInfo } from "./IEmployerInfo";
import { IEmploymentType } from "./IEmploymentType";
import { IWorkAdress } from "./IWorkAdress";

export interface IJobAd {
  id: string;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: IDescription;
  employment_type: IEmploymentType;
  workplace_address: IWorkAdress;
  publication_date: string;
  employer: IEmployerInfo;
  last_publication_date: string;
}
