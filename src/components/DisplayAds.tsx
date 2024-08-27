import { useContext } from "react";
import { JobAdsContext } from "../contexts/JobAdsContext";
import DisplayAd from "./DisplayAd";

const DisplayAds = () => {
  const { jobAds } = useContext(JobAdsContext);

  return (
    <div>
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

export default DisplayAds;
