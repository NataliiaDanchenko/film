import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Input from "../UI components/Input";
import Button from "../UI components/Button";
import MovieCards from "../movieCard/MovieCard";

const HomePage = () => {
  const [value, setValue] = useState("");

  const fetchGroups = () =>
    axios
      .get(`https://www.omdbapi.com/?apikey=e5df209f&t=${value}&plot=full`)
      .then((res) => res.data);

  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchGroups,
    enabled: false,
  });

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const addContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    refetch();
    setValue("");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="flex gap-5">
        <Input changeValue={changeValue} />
        <Button addContent={addContent} />
      </div>

      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div>
          {isError && <div>Error</div>}
          {data && (
            <MovieCards
              isPending={isPending}
              isError={isError}
              imdbID={data.imdbID}
              Title={data.Title}
              Year={data.Year}
              Country={data.Country}
              Genre={data.Genre}
              Poster={data.Poster}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;