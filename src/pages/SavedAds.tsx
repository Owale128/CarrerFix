import { useContext } from "react";
import { DisplayAd } from "../components/DisplayAd";
import { SaveAdsContext } from "../context/SaveAdsContext";
import { DigiTypographyHeadingJumbo } from "@digi/arbetsformedlingen-react";
import { TypographyHeadingJumboLevel } from "@digi/arbetsformedlingen";

const SavedAds = () => {
  const { saveAds } = useContext(SaveAdsContext);

  return (
    <div>
      <DigiTypographyHeadingJumbo
        afText="Sparade Annonser"
        afLevel={TypographyHeadingJumboLevel.H1}
      ></DigiTypographyHeadingJumbo>
      {saveAds.length > 0 ? (
        <ul className="savedAdsList">
          {saveAds.map((ad) => (
            <li key={ad.id} className="savedAdItem">
              <DisplayAd jobAd={ad} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga sparade annonser</p>
      )}
    </div>
  );
};

export default SavedAds;
