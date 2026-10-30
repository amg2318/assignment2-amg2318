

function TaskItem({item, handleDelete, handleCheck}) {

    return (
       <div className="task-item">
            <label className={`task ${item.completed && 'completed'}`}>
                <input onChange={() => handleCheck(item.id)} type="checkbox" id="task-check" checked={item.completed}/>
                <span className={`checkmark ${item.completed && 'completed'}`}></span>{item.text}
            </label>
            <button onClick={() => handleDelete(item.id)} className="delete-button">
                <img src="src/assets/x_icon.png" alt="delete icon" width="24" height="24"/>
            </button>
        </div>
    )
}

export default TaskItem;