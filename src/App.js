import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/tasks";
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import Icon from '@material-ui/core/Icon';
import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFetched = await fetchTasks();
      setTasks(tasksFetched);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = res.json();
    return data;
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    // the response object is the new task added
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskFetched = await fetchTask(id);
    console.log(taskFetched);
    const updatedTask = { ...taskFetched, reminder: !taskFetched.reminder };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    console.log(data);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <ParticlesBg type="square" bg={true} />
      <Header
        headerTitle={"Focal Point"}
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
        <div>
          Woohoo! you're done! go have a coffee <LocalCafeTwoToneIcon/>
        </div>
      )}
    </div>
  );
}

export default App;
