import { FaWindowClose } from "react-icons/fa";

const Task = ({task, onDelete, onDblClick}) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onDblClick(task.id)}
    >
      <h3>
        {task.task}{" "}
        <FaWindowClose cursor="pointer" onClick={() => onDelete(task.id)} />
      </h3>
      <h5>{task.date}</h5>
      <h6>{task.time}</h6>
    </div>
  );
};

export default Task;
