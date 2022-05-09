import { useContext } from "react";
import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

export default function Movie({ title, director, category, year, trailer, ratings, checked, movie}) {
    const {favorite} = useContext(TaskContext);

    return (
        <Card>
        
            <button checked={false} onClick={() => favorite(movie)} className="favorite">
                 <MdOutlineFavoriteBorder size={20} />
                </button>

            <h2 className="text-display">{title}</h2>
            <h3 className="text-display">Director: {director}</h3>
            <h3 className="text-display">Categories: {category}</h3>
            <h3 className="text-display">Year: {year.split('-')[0]}</h3>
            {/* <h3 className="text-display">{image}</h3> */}
            <h3 className="text-display">{trailer}</h3>
            <h3 className="text-display">Rating: {ratings}</h3>
            {/* <p>{description}</p> */}
        </Card>
    )
}

