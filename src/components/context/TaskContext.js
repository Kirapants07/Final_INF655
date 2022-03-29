import { useState, createContext } from "react";
import {v4 as uuidv4} from 'uuid';
import TaskData from "../Tasks/TaskData";
 
const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [taskList, setTaskList] = useState(TaskData );
    const [taskEdit, setTaskEdit] = useState({
        task: {},
        edit: false
    });

    const addTask= (newTask) => {
        newTask.id = uuidv4();
        setTaskList([newTask, ...taskList]);
        }

    const editTask = (task) => {
        setTaskEdit({task, edit: true});
    }

    const updateTask = (id, updTask) => {
        setTaskList(taskList.map((task)=> task.id === id ? {...task, ...updTask} : task));
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };
    
    const checkTask = (id) => {
        setTaskList(taskList.map((task)=> task.id === id ? {...task, checked: !task.checked} : task));
    }
    
    return <TaskContext.Provider value={{taskList, deleteTask, checkTask, addTask, editTask, updateTask}}>{children}</TaskContext.Provider>;
};

export default TaskContext;
