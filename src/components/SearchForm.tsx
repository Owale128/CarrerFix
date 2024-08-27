import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";

export const SearchForm = () => {
  return (
    <DigiFormInputSearch
      afLabel="Sök Jobb"
      afVariation={FormInputSearchVariation.LARGE}
      afType={FormInputType.SEARCH}
      afButtonText="Sök"
    ></DigiFormInputSearch>
  );
};
