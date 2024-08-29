import { useParams } from "react-router-dom";
import { getAd } from "../services/AdService";
import { useEffect, useState } from "react";
import { IJobAd } from "../models/IJobAd";

export const AdPage = () => {
  const { id } = useParams<{ id: string }>();

  const [job, setJob] = useState<IJobAd>();

  useEffect(() => {
    if (id) {
      const getJob = async (id: number) => {
        try {
          const jobData = await getAd(id);

          setJob(jobData);

          console.log("data retreived: ", jobData);
        } catch (error) {
          console.error("No data found", error);
        }
      };

      getJob(+id);
    }
  });

  return (
    <>
      <p>{job?.id}</p>
    </>
  );
};
