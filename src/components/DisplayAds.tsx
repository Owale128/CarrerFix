import { useContext } from "react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { DisplayAd } from "./DisplayAd";

export const DisplayAds = () => {
  const { jobAds } = useContext(JobAdsContext);

  return (
    <div>
      {jobAds.length > 0 ? (
        <ul>
          {jobAds.map((job) => (
            <DisplayAd key={job.id} jobAd={job}></DisplayAd>
          ))}
        </ul>
      ) : (
        <p>No job ads found.</p>
      )}
    </div>
  );
};
