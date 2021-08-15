import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Doctors appointment",
      date: "2021-08-15",
      time: "2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      task: "Doctors appointment",
      date: "2021-08-15",
      time: "2:30 pm",
      reminder: true,
    },
    {
      id: 3,
      task: "Doctors appointment",
      date: "2021-08-15",
      time: "2:30 pm",
      reminder: false,
    },
    {
      id: 4,
      task: "Doctors appointment",
      date: "2021-08-15",
      time: "2:30 pm",
      reminder: false,
    },
  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        headerTitle = {'Focal Point'}
        onClick={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDblClick={toggleReminder}
        />
      ) : (
        "Woohoo! you're done! go have a coffee"
      )}
    </div>
  );
}

export default App;
