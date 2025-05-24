import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskID, setTaskID] = useState(1)

  const addTask = (taskText) => {
    const newTask = {
      id : Date.now(),
      text : taskText,
      completed : false
    }
    
    const updatedTasks = [...tasks, newTask]

    setTasks(updatedTasks);
    setTaskID(taskID + 1);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    console.log(taskText);
  }

  const deleteTask = (id) => {
    const existingTasks = localStorage.getItem("tasks");
    const parsedTasks = JSON.parse(existingTasks); //string to object

    const updatedTasks = parsedTasks.filter(task => task.id != id);

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    console.log(`${id} deleted`);
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks'); //in the form of a string

    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks); //converting string to array of objects (tasks)
      setTasks(parsedTasks); //setting the inital state of 'tasks' to the existing list of tasks
    }
  }, []) //dependency array is blank so that the function runs only once whenever the page is refreshed

  const toggleComplete = (id) => {
    const existingTasks = localStorage.getItem('tasks');
    const parsedTasks = JSON.parse(existingTasks);
    
    const updatedTasks = parsedTasks.map(task => 
      task.id == id ? {...task, completed : !task.completed} : task
    )

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg">
      <TodoInput onAddTask={addTask}/>
      <TodoList tasks={tasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete}/>
    </div>
  )
  
}

export default App
