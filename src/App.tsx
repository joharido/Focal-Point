import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/tasks";
import LocalCafeTwoToneIcon from "@material-ui/icons/LocalCafeTwoTone";
import ParticlesBg from "particles-bg";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<any>([]);

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
  const fetchTask = async (id: string) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = res.json();
    return data;
  };

  const addTask = async (task: any) => {
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

  const deleteTask = async (id: string) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task: any) => task.id !== id));
  };

  const toggleReminder = async (id: string) => {
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
      tasks.map((task: any) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <ParticlesBg type="square" bg={true} />
      <Header
        headerTitle={"Focal Point"}
        setShowAddTask={setShowAddTask}
        showAddTask={showAddTask}
      ></Header>
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDblClick={toggleReminder}
        />
      ) : (
        <div>
          Woohoo! you're done! go have a coffee <LocalCafeTwoToneIcon />
        </div>
      )}
    </div>
  );
};

export default App;
