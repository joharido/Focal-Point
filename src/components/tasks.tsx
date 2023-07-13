import React from "react";
import Task, {TaskType} from "./Task";

interface TasksProps {
  tasks: Array<TaskType>;
  onDelete: any;
  onDblClick: any;
}

const Tasks = ({ 
    tasks, 
    onDelete, 
    onDblClick 
}: TasksProps) => {
  return (
    <>
      {tasks.map((task: TaskType) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onDblClick={onDblClick}
          ></Task>
        );
      })}
    </>
  );
};

export default Tasks;
