import TaskItem from "./TaskItem"

function TaskList({tasks, handleDelete, handleCheck}) {
    if (!tasks || tasks.length === 0 ) {
        return <p>No tasks</p>
    }
    return (
        <div className="task-list">
            {tasks.map((item) => (
                <TaskItem 
                    key={item.id} 
                    item={item} 
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            ))}
        </div>
    )
}

export default TaskList