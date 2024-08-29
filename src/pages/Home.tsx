import { SearchForm } from "../components/SearchForm";

import { useGetJobs } from "../hooks/useGetJobs";

export const Home = () => {
  const [getJobsAds] = useGetJobs();

  return (
    <>
      <SearchForm getJobAds={getJobsAds} />
    </>
  );
};
