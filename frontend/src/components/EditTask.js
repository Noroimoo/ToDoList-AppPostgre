import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/tasks/'+ id)
    .then(response => {
      setTask({
        title: response.data.title || '',
        description: response.data.description || '',
        status: response.data.status || ''
      });
    })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/tasks/update/' + id, task)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(err => console.error(err));
     };


  return (
    <div>
      <h3>Изменить задачу</h3>
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
                <option value="Pending">Ожидает выполнения</option>
                <option value="In Progress">В процессе</option>
                <option value="Done">Выполнено</option>
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Task" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
};

export default EditTask;
