import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DisplayAds } from "../components/DisplayAds";
import { SearchForm } from "../components/SearchForm";

import { useAds } from "../hooks/useAds";

export const AdsPage = () => {
  const [getAds] = useAds();

  return (
    <div>
      <SearchForm getAdData={getAds} />
      <DisplayAds></DisplayAds>

      <DigiNavigationPagination
        afTotalPages={6}
        afInitActivePage={1}
      ></DigiNavigationPagination>
    </div>
  );
};
