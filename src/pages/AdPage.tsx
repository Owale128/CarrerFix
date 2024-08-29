import { useContext } from "react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import DisplayAd from "../components/DisplayAd";
import { SearchForm } from "../components/SearchForm";
import { useGetJobs } from "../hooks/useGetJobs";

const AdPage = () => {
  const { jobAds } = useContext(JobAdsContext);

  const [getJobsAds] = useGetJobs();

  return (
    <div>
      <SearchForm getJobAds={getJobsAds} />
      {jobAds.length > 0 ? (
        <ul>
          {jobAds.map((job) => (
            <li key={job.id}>
              <DisplayAd jobAd={job}></DisplayAd>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job ads found.</p>
      )}
    </div>
  );
};

export default AdPage;
