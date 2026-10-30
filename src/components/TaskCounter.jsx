function TaskCounter({completed, total}) {
    
    return (
        <p>{`${total} / ${completed}`}</p>
    )
}

export default TaskCounter