import axios from 'axios';
import { Link } from "react-router-dom";
import './Task.css';

const Task = props => {
const deleteTask = async () => {
  try {
    await axios.delete('http://localhost:5000/tasks/' + props.task.id);
    window.location = '/'; 
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="task-container">
      <h3 className="task-title">{props.task.title}</h3>
      <p className="task-description">{props.task.description}</p>
      <p>Статус: <span className="task-status">{props.task.status}</span></p>
      <button onClick={deleteTask} className="task-button task-button-delete">Удалить</button>
      <Link to={"/edit/" + props.task.id} className="task-button task-button-edit">Изменить</Link>
    </div>
  );
};

export default Task;
