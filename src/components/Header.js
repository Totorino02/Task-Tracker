import AddTaskBtn from "./AddTaskBtn"

const Header = ({ title, onShowAddTask, showAddTask }) => {
    return (
        <div className="text-center header">
            <h1>{title}</h1>
            <AddTaskBtn onShowAddTask={onShowAddTask} text={showAddTask ? 'Cancel' : 'Add Task'} bgColor={showAddTask ? 'red': 'green'} color="white"/>
        </div>
    )
}

export default Header
