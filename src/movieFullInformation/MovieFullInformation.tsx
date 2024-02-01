import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MovieItem: any = () => {
  const params = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(`http://www.omdbapi.com/?apikey=e5df209f&t&i=${params.imdbID}&plot=full`)
        .then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="m-14">
      <div className="m-3 text-center text-5xl font-bold">{data.Title}</div>
      <div className="flex justify-between items-center">
        <div className="w-3/6">
          <p className="pb-2.5 text-2xl">{`Year: ${data.Year}`}</p>
          <p className="pb-2.5 text-2xl">{`Country: ${data.Country}`}</p>
          <p className="pb-2.5 text-2xl">{`Genre: ${data.Genre}`}</p>
          <p className="pb-2.5 text-2xl">{`Language: ${data.Language}`}</p>
          <p className="pb-2.5 text-2xl">{`Type: ${data.Type}`}</p>
          <p className="pb-2.5 text-2xl">{`Awards: ${data.Awards}`}</p>
          <p className="pb-2.5 text-2xl">{`Director: ${data.Director}`}</p>
          <p className="pb-2.5 text-2xl">{`Actors: ${data.Actors}`}</p>
          <p className="pb-2.5 text-2xl">{`Released: ${data.Released}`}</p>
          <p className="pb-2.5 text-2xl">{`Runtime: ${data.Runtime}`}</p>
          <p className="pb-2.5 text-2xl">{`Plot: ${data.Plot}`}</p>
        </div>
        <div><img src={data.Poster} alt="img" /></div>
      </div>
    </div>
  );
};

export default MovieItem;