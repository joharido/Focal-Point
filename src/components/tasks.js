import Task from "./Task";
const Tasks = ({tasks, onDelete, onDblClick}) => {
    return (
        <>
            {tasks.map((task) => {
                return <Task key={task.id} task={task} onDelete={onDelete} onDblClick={onDblClick}></Task>;
            })}
        </>
    );
};

export default Tasks;
