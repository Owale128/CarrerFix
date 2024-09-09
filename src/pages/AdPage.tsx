import { useParams } from "react-router-dom";
import { getAd } from "../services/AdService";
import { useEffect, useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { ExtendedAdDetails } from "../components/ExtendedAdDetails";

export const AdPage = () => {
  const { id } = useParams<{ id: string }>();
  const [ad, setAd] = useState<IJobAd>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const getAdData = async (id: string) => {
        try {
          const data = await getAd(id);
          setAd(data);
          console.log("data retreived: ", data);
        } catch (error) {
          console.error("No data found", error);
        } finally {
          setIsLoading(false);
        }
      };

      getAdData(id);
    }
  }, [id]);
  if (isLoading) return <h2>...Laddar...</h2>;
  return (
    <>
      <ExtendedAdDetails ad={ad}></ExtendedAdDetails>
    </>
  );
};
