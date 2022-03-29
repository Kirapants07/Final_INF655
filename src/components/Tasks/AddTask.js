import React, {useState} from 'react'
import Card from '../shared/Card'

export default function AddTask({handleAdd}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if (title.length !== 0 && description.trim().length !== 0){
            const newTask = {
                title,
                description
            };
            handleAdd(newTask);
            setTitle('');
            setDescription('');
        }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>
          <div>
              <input className="inputbox"
              onChange={handleTitleChange} 
              type="text" 
              placeholder="Title" 
              value={title} />
              <input className="inputbox"
              onChange={handleDescriptionChange} 
              type="text" 
              placeholder="Description" 
              value={description} />
          </div>
          <button className="btn" type ="submit">Add Task</button>
      </form>
    </Card>
  )
}
