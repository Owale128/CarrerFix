import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTextContext } from "../context/SearchTextContext";
import { IJobAd } from "../models/IJobAd";

interface ISearchForm {
  getAdData: (searchText: string) => Promise<{ ads: IJobAd[] }>;
  setCurrentPage: (page: number) => void;
}

export const SearchForm = ({ getAdData, setCurrentPage }: ISearchForm) => {
  const navigate = useNavigate();
  const { setSearchText } = useContext(SearchTextContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (e: DigiFormInputSearchCustomEvent<string>) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setSearchText(inputValue);
      const searchResults = await getAdData(inputValue);
      localStorage.setItem("storedAds", JSON.stringify(searchResults.ads));
      localStorage.setItem("storedSearchText", inputValue);
      setInputValue("");
      if (typeof setCurrentPage === "function") {
        setCurrentPage(1);
      }
      navigate("/ads");
    }
  };

  return (
    <div className="searchFormContainer">
      <DigiFormInputSearch
        afLabel="Sök Jobb"
        afVariation={FormInputSearchVariation.MEDIUM}
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
