const AddTaskBtn = ({ onShowAddTask, text, bgColor, color }) => {
    return (
        <button className="btn" onClick={onShowAddTask} style={{backgroundColor: bgColor, color: color}}>
            {text}
        </button>
    )
}

export default AddTaskBtn
