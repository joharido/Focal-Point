import React from "react";
import Task from "./Task";

interface TasksProps {
  tasks: any;
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
      {tasks.map((task: any) => {
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
