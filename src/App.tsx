import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import MovieItem from "./movieFullInformation/MovieFullInformation";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:imdbID" element={<MovieItem />} />
      </Routes>
    </div>
  );
}

export default App;
