const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3 style={{color: 'steelblue'}}>{task.title}
            <h4 onClick={() => onDelete(task.id)} style={{color: 'red'}}>X</h4></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
