import { useContext } from "react";
import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

export default function Movie({id, title, description, checked, task: movie}) {
    const {favorite} = useContext(TaskContext);

    return (
        <Card>
        
            <button checked={false} onClick={() => favorite(movie)} className="favorite">
                 <MdOutlineFavoriteBorder size={20} />
                </button>

            <h2 className="text-display">{title}</h2>
            {/* <p>{description}</p> */}
        </Card>
    )
}

