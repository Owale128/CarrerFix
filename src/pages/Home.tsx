import { SearchForm } from "../components/SearchForm";

import { useGetJobs } from "../hooks/useGetJobs";

export const Home = () => {
  const [getAds] = useGetJobs();

  return (
    <>
      <SearchForm getAds={getAds} />
    </>
  );
};
