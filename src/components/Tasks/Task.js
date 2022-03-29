import React from "react";
import { FaTrash } from "react-icons/fa";
import Card from "../shared/Card";

export default function Task({id, title, description, checked, handleDelete, handleCheck}) {
    return (
        <Card>
            <input type="checkbox" 
            checked={checked} 
            className="check"
            onChange={()=>handleCheck(id)}></input>
            <h2 style={checked ? {textDecoration: "line-through" } : null} className="text-display">{title}</h2>
            <p style={checked ? {textDecoration: "line-through" } : null}>{description}</p>
            <button onClick={() => handleDelete(id)} className="delete">
                <FaTrash size={20} />
            </button>
        </Card>
    )
}