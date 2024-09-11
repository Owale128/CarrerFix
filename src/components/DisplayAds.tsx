import { useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { DisplayAd } from "./DisplayAd";
import "../sass/adsList.scss";
import { DigiFormCheckbox } from "@digi/arbetsformedlingen-react";
import { FormCheckboxVariation } from "@digi/arbetsformedlingen";

interface DisplayAdsProps {
  ads: IJobAd[];
}

export const DisplayAds = ({ ads }: DisplayAdsProps) => {
  const [sevenDaySpan, setSevenDaySpan] = useState<boolean>(false);

  const now = new Date().getTime();
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

  const filterAds = ads.filter((ad) => {
    const publicationDate = new Date(ad.publication_date).getTime();
    return sevenDaySpan ? publicationDate >= sevenDaysAgo : true;
  });

  const sortedAds = filterAds.sort((a, b) => {
    const dateA = new Date(a.publication_date).getTime();
    const dateB = new Date(b.publication_date).getTime();
    return dateB - dateA;
  });

  return (
    <>
      {sortedAds.length > 0 && (
        <section className="checkBoxSection">
          <b>
            <p>Filtrera sökningar</p>
          </b>
          <DigiFormCheckbox
            afLabel="Senaste 7 dagarna"
            afVariation={FormCheckboxVariation.PRIMARY}
            afChecked={sevenDaySpan}
            onAfOnChange={() => setSevenDaySpan(!sevenDaySpan)}
          />
        </section>
      )}

      <div>
        {sortedAds.length > 0 ? (
          <ul className="adsList">
            {sortedAds.map((job) => (
              <DisplayAd key={job.id} jobAd={job} />
            ))}
          </ul>
        ) : (
          <h2>Inga annonser hittade</h2>
        )}
      </div>
    </>
  );
};
