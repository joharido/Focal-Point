import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
    },
  ]);
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
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDblClick={toggleReminder}
        />
      ) : (
        "No Tasks Remain"
      )}
    </div>
  );
}

export default App;
