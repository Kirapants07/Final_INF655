import React from "react";
import Movie from "./Movie";
import { useState } from "react";
import SearchBar from "./SearchBar";
import GetMovies from './GetMovies';

export default function Movies() {
    const [search, setSearch] = useState('');
    const result = GetMovies(search);

  if (!result || result.length === 0){
    return (
      <span>
       <SearchBar search={search} setSearch={setSearch} />
        <h1>No Movies Found</h1>
     </span>);
  }

  return (
    <span>
        <SearchBar search={search} setSearch={setSearch} />
        <Movie 
        // key={movie.id}
        // id={movie.id} 
        //title={result.title} 
        // description={movie.description} 
        // checked ={movie.checked}
        // task = {movie}
        />
    </span>
  );
}
