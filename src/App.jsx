import './App.css'
import { useState } from 'react'
import TaskCounter from './components/TaskCounter'
import TaskData from './data/TaskData'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {
  const [tasks, setTasks] = useState(TaskData)
  const [filter, setFilter] = useState('all'); // all, active, completed

  const totalCount = tasks.length;              // all tasks, not the filtered list
  const completedCount = tasks.filter(t => t.completed).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1, 
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id != id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const filterTasks = (type) => {
    setFilter(type);
    console.log(filteredTasks)
  }

  return (
    <div className="page">
      <header>
        <div className="site-header">
            <div className="left-content">
                <button type="button" className="hamburger">
                    <img src="src/assets/menu_icon.png" alt="menu icon" width="24"/>
                </button>
                <div className="search-bar">
                    <img src="src/assets/search_icon.png" alt="search icon" width="24"/>
                    <input type="text" name="q" placeholder="Quick Find"/>
                </div>
            </div>
            <div className="task-counter">
                <img src="src/assets/check_icon.png" alt="menu icon" width="24"/>
                <TaskCounter completed={completedCount} total={totalCount}/>
            </div>
        </div>
      </header>
     <main className="site-main">
            <aside className="navbar">
                <nav>
                    <ul className="nav-items">
                        <li id="inbox">
                            <img src="src/assets/inbox_icon.png" alt="inbox icon" width="24"/>
                            <p className="main-text" id="current-tab">Inbox</p>
                            <p className="task-count">5</p>
                        </li>
                        <li id="today">
                            <img src="src/assets/calendar_icon.png" alt="calendar icon" width="24"/>
                            <p className="main-text">Today</p>
                            <p className="task-count">5</p>
                        </li>
                        <li id="upcoming">
                            <img src="src/assets/upcoming_icon.png" alt="upcoming icon" width="24"/>
                            <p className="main-text">Upcoming</p>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className="main-content">
                <h1>Inbox</h1>
                <div className="filter-buttons">
                  <button onClick={() => filterTasks("all")} type="button" className={`filter ${filter === 'all' && 'selected'}`}>
                    All
                    </button>
                  <p>|</p>
                  <button onClick={() => filterTasks("active")} type="button" className={`filter ${filter === 'active' && 'selected'}`}>Active</button>
                  <p>|</p>
                  <button onClick={() => filterTasks("completed")} type="button" className={`filter ${filter === 'completed' && 'selected'}`}>Completed</button>
                </div>
                <TaskForm handleAdd={addTask}/>
                <TaskList tasks={filteredTasks} handleDelete={deleteTask} handleCheck={toggleComplete}/>
            </section>
        </main>
    </div>
    
  )
}

export default App
