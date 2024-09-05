import { useContext } from "react";
import { JobAdsContext } from "../context/JobAdsContext";
import { DisplayAd } from "./DisplayAd";
import '../sass/adsList.scss'

export const DisplayAds = () => {
  const { jobAds } = useContext(JobAdsContext);

  return (
    <div>
      {jobAds.length > 0 ? (
        <ul className="adsList">
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
