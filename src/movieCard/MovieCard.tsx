import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  imdbID?: string;
  Title?: string;
  Year?: string;
  Country: string;
  Genre: string;
  Poster?: string;
  isPending?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

const MovieCards: FC<MovieCardProps> = ({ imdbID, Title, Year, Country, Genre, Poster, isPending, isError }) => {
  const navigate = useNavigate();

  const handlerClickNavigate = () => {
    navigate(`/film/${imdbID}`);
  };

  return (
    <div className="flex flex-col justify-center items-center border border-slate-500 my-4 p-3 hover:cursor-pointer" onClick={handlerClickNavigate}>
      {isPending ? <h1>Loading...</h1> : null}
      <h1 className="m-3 text-center text-3xl font-bold">{!isError ? Title : null}</h1>
      <p className="text-xl">{Year}</p>
      <p className="text-xl">{Country}</p>
      <p className="text-xl">{Genre}</p>
      <div><img src={Poster} alt="img" /></div>
    </div>
  );
};

export default MovieCards;
