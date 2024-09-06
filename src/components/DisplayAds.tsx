import { useContext, useState } from "react";
import { JobAdsContext } from "../context/JobAdsContext";
import { DisplayAd } from "./DisplayAd";
import '../sass/adsList.scss'

export const DisplayAds = () => {
  const { jobAds } = useContext(JobAdsContext);
  const [showNewerAds, setShowNewerAds] = useState(false)

   jobAds.sort((a, b) => {

    const A = new Date(a.publication_date).getTime();
    
    const B = new Date(b.publication_date).getTime();

    return showNewerAds ?  A - B : B - A;
   
  });

  return (
  <div>
      <input type="checkbox"
      checked={showNewerAds}
      onChange={() => setShowNewerAds(!showNewerAds)}
      />
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
