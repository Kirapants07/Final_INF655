import React from "react";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function GetMovies(search) {
    
    console.log(search);
    const [movieData, setMovieData] = useState({});
    const API_KEY = '2cc400c668df650508e7074fd7e11e01';

    useEffect (()=>{
        const fetchMovies = async () =>{
            try{
                const response =  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2cc400c668df650508e7074fd7e11e01&query=${search}`);
                const movieList = await response.json();
                setMovieData(movieList);
            } catch (err) {
                console.log(err);
            }
          }

          fetchMovies();
    }, [search] )
    
    console.log(movieData);

    const getConfig = () => {
      const result = fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
      .then((result)=>{
          return result.json();
      })
      .then((data)=>{
          let baseImageURL = data.images.secure_base_url;
          let configData = data.images;
          //console.log('config:', data);
          //console.log('config fetched');
          //result();
          
      })
      .catch(function(err){
          alert(err);
      });
  }


  return (
    <span>
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
