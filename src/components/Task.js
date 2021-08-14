import {FaWindowClose} from 'react-icons/fa'

const Task = ({task,onDelete, onDblClick}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}  onDoubleClick={() => onDblClick(task.id)}>
            <h3>{task.text}{' '} <FaWindowClose cursor='pointer' onClick={() => onDelete(task.id)}/></h3>
            <h5>{task.day}</h5>
        </div>
    )
}


export default Task