import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    // On submitting the add task from [ adding new task ]
    const onSubmit = (e) => {
        e.preventDefault();

        if(title === '' || day === ''){
            alert('Please enter a Task and a Time or shedule');
        }else{
            onAdd({ title, day, reminder });

            setTitle('');
            setDay('');
            setReminder(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Task</label>
                <input type="text" className="form-control" placeholder="Add Task..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Day and Time</label>
                <input type="text" className="form-control" placeholder="Add Day and Time..." value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
    <br/>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
    <br/>
            <button id="addTaskBtn">Save Task</button>
        </form>
    )
}


export default AddTaskForm
