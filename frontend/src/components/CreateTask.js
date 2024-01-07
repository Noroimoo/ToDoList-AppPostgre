import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: ''
  });

  const navigate = useNavigate(); 

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      title: task.title,
      description: task.description,
      status: task.status
    };

    axios.post('http://localhost:5000/tasks/add', newTask)
      .then(res => {
        console.log(res.data);
        navigate('/'); 
      });

    setTask({
      title: '',
      description: '',
      status: ''
    });
  };

  return (
    <div>
      <h3>Создать новую задачу</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название: </label>
          <input  type="text"
              required
              name="title"
              className="form-control"
              value={task.title}
              onChange={handleChange}
              />
        </div>
        <div className="form-group">
          <label>Описание: </label>
          <input
              type="text"
              name="description"
              className="form-control"
              value={task.description}
              onChange={handleChange}
              />
        </div>
        <div className="form-group">
          <label>Статус: </label>
          <select
              required
              name="status"
              className="form-control"
              value={task.status}
              onChange={handleChange}>
                <option value={null}></option>
                <option value="Pending">Ожидает выполнения</option>
                <option value="In Progress">В процессе</option>
                <option value="Done">Выполнено</option>
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Task" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateTask;
