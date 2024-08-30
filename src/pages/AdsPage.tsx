import { DisplayAds } from "../components/DisplayAds";
import { SearchForm } from "../components/SearchForm";

import { useAds } from "../hooks/useAds";

export const AdPage = () => {
  const [getAds] = useAds();

  return (
    <div>
      <SearchForm getAdData={getAds} />
      <DisplayAds></DisplayAds>
    </div>
  );
};
