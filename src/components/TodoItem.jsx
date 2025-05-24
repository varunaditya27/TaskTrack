import { useState } from "react"
import TodoInput from "./TodoInput.jsx"

function TodoItem (props) {
    const { task, onDeleteTask } = props;

    const handleDeleteTask = () => {
        onDeleteTask(task.id)
    }

    return (
        <div>
            <span>
                <h3>{task.id} == {task.text} <button onClick={handleDeleteTask}>Delete</button></h3>
            </span>
        </div>
    )
}

export default TodoItem