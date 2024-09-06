import { useContext, useEffect, useState } from "react";
import { JobAdsContext } from "../context/JobAdsContext";
import { DisplayAd } from "./DisplayAd";
import '../sass/adsList.scss'

export const DisplayAds = () => {
  const { jobAds } = useContext(JobAdsContext);
  const [sevenDaySpan, setSevenDaySpan] = useState<boolean>(false);
  
  useEffect(() => {
    
    const setFilter: boolean = JSON.parse(localStorage.getItem("sevenDaySpan") || '[]');

    if(setFilter !== null) {
      setSevenDaySpan(setFilter);
    }
  },[])

useEffect(() => {
  localStorage.setItem('sevenDaySpan', JSON.stringify(sevenDaySpan));
  
},[sevenDaySpan])

  const now =  new Date().getTime();
  const sevenDaysAgo = now - (7*24*60*60*1000);

  const filterAds = jobAds.filter(ad => {
    const publicationDate = new Date(ad.publication_date).getTime();
    
    return sevenDaySpan ?  publicationDate >= sevenDaysAgo :  true;
  }) 

   const sortedAds = filterAds.sort((a, b) => {

    const A = new Date(a.publication_date).getTime();
    
    const B = new Date(b.publication_date).getTime();

    return  B - A;

  });

  
  return (
  <div>
    <label htmlFor="senaste">Visa för de 7 senaste dagarna</label>
      <input id="senaste" type="checkbox"
      checked={sevenDaySpan}
      onChange={() => setSevenDaySpan(!sevenDaySpan)}
      />
      {jobAds.length > 0 ? (
        <ul className="adsList">
          {sortedAds.map((job) => (
            <DisplayAd key={job.id} jobAd={job}></DisplayAd>
          ))}
        </ul>
      ) : (
        <p>No job ads found.</p>
      )}
    </div>
  );
};
