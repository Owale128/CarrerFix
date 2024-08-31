import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTextContext } from "../contexts/SearchTextContext";

interface ISearchForm {
  getAdData: (searchText: string, offset: number, limit: number) => void;
}

export const SearchForm = ({ getAdData }: ISearchForm) => {
  const navigate = useNavigate();

  const { searchText, setSearchText } = useContext(SearchTextContext);

  const offset = 0;
  const limit = 10;

  const handleSearch = (e: DigiFormInputSearchCustomEvent<string>) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      getAdData(searchText, offset, limit);
      navigate("/ads");
    }
  };

  return (
    <DigiFormInputSearch 
      afLabel="Sök Jobb"
      afVariation={FormInputSearchVariation.MEDIUM}
      afType={FormInputType.SEARCH}
      afButtonText="Sök"
      onAfOnSubmitSearch={handleSearch}
      onAfOnChange={(e) => setSearchText(e.target.value)}
      value={searchText}
    ></DigiFormInputSearch>
  );
};

