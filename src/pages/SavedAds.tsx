import { useContext } from "react"
import { DisplayAd } from "../components/DisplayAd"
import { SaveAdsContext } from "../context/SaveAdsContext";

const SavedAds = () => {
  const {saveAds} = useContext(SaveAdsContext);
  
  return (
<div>
      <h1>Sparade Annonser</h1>
      {saveAds.length > 0 ? (
        <ul className="savedAdsList">
          {saveAds.map(ad => (
            <li key={ad.id} className="savedAdItem">
              <DisplayAd jobAd={ad}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga sparade annonser.</p>
      )}
    </div>
  )
}

export default SavedAds
