import { IApplicationDetails } from "./IApplicationDetails";
import { IDescription } from "./IDescription";
import { IDuration } from "./IDuration";
import { IEmployerInfo } from "./IEmployerInfo";
import { IEmploymentType } from "./IEmploymentType";
import { ISalaryType } from "./ISalaryType";
import { IWorkAdress } from "./IWorkAdress";

export interface IJobAd {
  id: string;
  webpage_url: string;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: IDescription;
  employment_type: IEmploymentType;
  salary_type: ISalaryType;
  duration: IDuration;
  workplace_address: IWorkAdress;
  publication_date: string;
  employer: IEmployerInfo;
  last_publication_date: string;
  company_information: string;
  needs: string;
  requirements: string;
  conditions: string;
  application_details: IApplicationDetails;
}
