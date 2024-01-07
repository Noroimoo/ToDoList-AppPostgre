import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        setTasks(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="tasklist-container">
      <h3 className="tasklist-title">Задачи</h3>
      {tasks.map((currenttask) => {
        return <Task task={currenttask} key={currenttask._id}/>;
      })}
      <Link to="/create" className="tasklist-create-link">Создать Задачу</Link>
    </div>
  );
};

export default TaskList;
