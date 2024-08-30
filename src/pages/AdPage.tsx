import { useParams } from "react-router-dom";
import { getAd } from "../services/AdService";
import { useEffect, useState } from "react";
import { IJobAd } from "../models/IJobAd";

export const AdPage = () => {
  const { id } = useParams<{ id: string }>();

  const [ad, setAd] = useState<IJobAd>();

  useEffect(() => {
    if (id) {
      const getAdData = async (id: string) => {
        try {
          const data = await getAd(id);

          setAd(data);

          console.log("data retreived: ", data);
        } catch (error) {
          console.error("No data found", error);
        }
      };

      getAdData(id);
    }
  }, [id]);

  return (
    <>
      <h2>{ad?.headline}</h2>
    </>
  );
};
