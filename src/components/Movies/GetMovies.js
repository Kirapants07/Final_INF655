import React from "react";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function GetMovies(search) {
    
    const [movieData, setMovieData] = useState([]);
    const API_KEY = '2cc400c668df650508e7074fd7e11e01';

    useEffect (()=>{
        const fetchMovies = async () =>{
            if (search){
                try{
                    const response =  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`);
                    const movieList = await response.json();
                    setMovieData(movieList.results);
                    // setMovieData({}
                    //     "title": movieList.results[0].original_title,
                    //     // "director":
                    //     // "category":
                    //     // "year":
                    //     // "image":
                    //     // "trailer":
                    //     // "ratings":
                    // });
                } catch (err) {
                    console.log(err);
                }
              }
            }
            fetchMovies();
    }, [search] )

    let movieArray = movieData.map(key => {
      let movie = {
        "title": key.original_title,
        //"director":
        "category": key.genre_ids, //need to link to category names
        "year": key.release_date,
        "image": key.poster_path, //need to fetch
        "trailer": key.video, //need to link
        "ratings": key.popularity
      };
      return movie;
    });

    console.log(movieArray);

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


  return (movieArray);
}
