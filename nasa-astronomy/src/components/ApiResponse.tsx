import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

interface ApiResponseResultType {
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

function ApiResponse() {
  const [data, setData] = useState<ApiResponseResultType>();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;

        const apiResponse: ApiResponseResultType = await fetchData(
          // make sure to add your key here.
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        setData(apiResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);
  if (!data) return <p>Loading...</p>;
  return (
    <div className="container flex flex-col gap-4">
      {data.media_type === "image" ? (
        <img src={data.url} alt="" className="max-w-lg mx-auto" />
      ) : (
        <iframe src={data.url} />
      )}
      <p className="text-5xl font-bold">{data.title}</p>
      <p className="text-xl">Date: {data.date}</p>
      <p className="text-xl leading-loose">Explanation: {data.explanation}</p>
    </div>
  );
}

export default ApiResponse;
