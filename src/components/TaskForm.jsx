import { useState } from "react"
import Button from "./Button";

function TaskForm({handleAdd}) {
    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    
    const handleTextChange = (e) => {
        if (text.trim() === '') {
            setbtnDisabled(true)
        } else if (text.trim().length > 0) {
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd(text)
        setText('')
        setbtnDisabled(true)
    }
    
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input onChange={handleTextChange} type="text" placeholder="Enter a task" value={text}/>
            <Button type="submit" version="add-task" children="Add Task" isDisabled={btnDisabled}/>
        </form>
    )
}

export default TaskForm