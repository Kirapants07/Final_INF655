import { useContext } from "react";
import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

export default function Movie({ title, image, director, category, year, trailer, ratings, checked, movie}) {
    //const {favorite} = useContext(TaskContext);

    let favorite = false;
    return (
        <Card>
            <button checked={false} onClick={() => favorite=true} className="favorite">
                {favorite 
                    ? <MdOutlineFavoriteBorder size={20} />
                    : <MdOutlineFavorite size={20} />
                }

            </button>

            <img src ={`https://image.tmdb.org/t/p/w185/${image}`} alt="card image" />

            <h2 className="text-display">{title}</h2>
            <h3 className="text-display">Director: {director}</h3>
            <h3 className="text-display">Categories: {category} NEED TO FETCH NAMED CAT</h3>
            <h3 className="text-display">Release Year: {year.split('-')[0]}</h3>
            <h3 className="text-display">https://www.youtube.com/watch?v=${trailer} NEED TO FETCH KEY</h3>
            <h3 className="text-display">Rating: {ratings}</h3>
            {/* <p>{description}</p> */}
        </Card>
    )
}

