import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTextContext } from "../context/SearchTextContext";
import "../sass/searchForm.scss";
import { IJobAd } from "../models/IJobAd";

interface ISearchForm {
  getAdData: (
    searchText: string
  ) => Promise<{ ads: IJobAd[]; totalCount: number }>;
}

export const SearchForm = ({ getAdData }: ISearchForm) => {
  const navigate = useNavigate();
  const { setSearchText } = useContext(SearchTextContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (e: DigiFormInputSearchCustomEvent<string>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSearchText(inputValue);
      const searchResults = await getAdData(inputValue);
      localStorage.setItem("storedAds", JSON.stringify(searchResults.ads));
      setInputValue("");
      navigate("/ads");
    }
  };

  return (
    <div className="searchForm-container">
      <DigiFormInputSearch
        className="searchForm"
        afLabel="Sök Jobb"
        afVariation={FormInputSearchVariation.LARGE}
        afAutofocus={true}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
        onAfOnSubmitSearch={handleSearch}
        onAfOnChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};
