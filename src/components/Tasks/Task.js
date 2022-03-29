import { useContext } from "react";
import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

export default function Task({id, title, description, checked, task}) {
    const {deleteTask, checkTask, editTask} = useContext(TaskContext);

    return (
        <Card>
            <input type="checkbox" 
            checked={checked} 
            className="check"
            onChange={()=>checkTask(id)}></input>
            <h2 style={checked ? {textDecoration: "line-through" } : null} className="text-display">{title}</h2>
            <p style={checked ? {textDecoration: "line-through" } : null}>{description}</p>
            <button onClick={() => editTask(task)} className="edit">
                <FaEdit size={20} />
            </button>
            <button onClick={() => deleteTask(id)} className="delete">
                <FaTrash size={20} />
            </button>
        </Card>
    )
}