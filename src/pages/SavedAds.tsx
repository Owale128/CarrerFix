import { useEffect, useState } from "react"
import { IJobAd } from "../models/IJobAd"
import { DisplayAd } from "../components/DisplayAd"



const SavedAds = () => {
   const [saveAds, setSaveAds] = useState<IJobAd[]>([])

useEffect(() => {
    const storedAd = JSON.parse(localStorage.getItem('savedAds')|| '[]');
    setSaveAds(storedAd)
})

const handleRemoveAd = (adId: string) => {
    const updatedAd = saveAds.filter(ad => ad.id !== adId)
    setSaveAds(updatedAd);
    localStorage.setItem('savedAds', JSON.stringify(updatedAd))
}

  return (
<div>
      <h1>Sparade Annonser</h1>
      {saveAds.length > 0 ? (
        <ul className="savedAdsList">
          {saveAds.map(ad => (
            <li key={ad.id} className="savedAdItem">
              <DisplayAd jobAd={ad} />
              <button onClick={() => handleRemoveAd(ad.id)}>Ta bort</button>
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
