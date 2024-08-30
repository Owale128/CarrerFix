import { SearchForm } from "../components/SearchForm";

import { useAds } from "../hooks/useAds";

export const Home = () => {
  const [getAdData] = useAds();

  return (
    <>
      <SearchForm getAdData={getAdData} />
    </>
  );
};
