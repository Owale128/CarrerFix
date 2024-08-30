import { SearchForm } from "../components/SearchForm";

import DisplayAds from "../components/DisplayAds";
import { useAds } from "../hooks/useAds";

const AdPage = () => {
  const [getAds] = useAds();

  return (
    <div>
      <SearchForm getAdData={getAds} />
      <DisplayAds></DisplayAds>
    </div>
  );
};

export default AdPage;
