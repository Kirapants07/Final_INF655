import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TaskData from '../Tasks/TaskData';
import Tasks from '../Tasks/Tasks';
import AddTask from "../Tasks/AddTask";
import SearchTask from "../Tasks/SearchTask";
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    const [taskList, setTaskList] = useState(TaskData);
    const [search, setSearch] =useState('');

    const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
    };

    const checkTask = (id) => {
    setTaskList(taskList.map((task)=> task.id === id ? {...task, checked: !task.checked} : task));
    }

    const addTask= (newTask) => {
    newTask.id = uuidv4();
    setTaskList([newTask, ...taskList]);
    }
  
    return (
        <div className="container">
        <Header />
        <AddTask handleAdd= {addTask}/>
        <SearchTask search={search} setSearch={setSearch} />
        <Tasks taskList={taskList.filter((task) => 
          task.title.toLowerCase().includes(search.toLowerCase())
          )}
              handleDelete ={deleteTask}
              handleCheck={checkTask} />
        <Footer />
      </div>
  )
}
