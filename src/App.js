import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";

import Header from "./components/Header";
import Tasks from "./components/Tasks"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Scrum Meeting",
      day: "5th June 5:00 pm",
      reminder: true
    },
    {
      id: 2,
      title: "Go to the GYM",
      day: "6th June 7:00 am",
      reminder: false
    },
    {
      id: 3,
      title: "Scrum Meeting",
      day: "6th June 10:00 am",
      reminder: true
    }
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setTasks([ newTask, ...tasks ]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Task
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ));
  }

  return (
    <div className="container">
      <Header onShowAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title='Task Tracker'/>
      {showAddTask && <AddTaskForm onAdd={addTask}/> }
  <hr/>
      {tasks.length <= 0 && <h4 style={{color: 'red'}}>No tasks in your shedule, Please add a task.</h4>}
      <Tasks onDelete={deleteTask} onToggle={toggleTask} tasks={tasks}/>
    </div>
  );
}

export default App;
