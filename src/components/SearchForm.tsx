import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ISearchForm {
  getAds: (searchText: string) => void;
}

export const SearchForm = ({ getAds }: ISearchForm) => {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: DigiFormInputSearchCustomEvent<string>) => {
    e.preventDefault();
    if (text.trim() !== "") {
      getAds(text);
      setText("");
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
      onAfOnChange={(e) => setText(e.target.value)}
      value={text}
    ></DigiFormInputSearch>
  );
};
