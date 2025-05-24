import { useState } from "react"
import TodoInput from "./TodoInput.jsx"

function TodoItem (props) {
    const { task, onDeleteTask, serialNumber } = props;

    const handleDeleteTask = () => {
        onDeleteTask(task.id)
    }

    const handleEditTask = () => {
        
    }

    return (
        <div>
            <h3>{serialNumber} == {task.text} <button onClick={handleEditTask}>Edit</button> <button onClick={handleDeleteTask}>Delete</button></h3>
        </div>
    )
}

export default TodoItem