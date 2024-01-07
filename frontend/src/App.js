import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import CreateTask from "./components/CreateTask";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="container">
        <br/>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
