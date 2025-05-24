import TodoInput from "./TodoInput.jsx"

function TodoItem (props) {
    const { task, onDeleteTask, serialNumber, onToggleComplete } = props;

    const handleDeleteTask = () => {
        onDeleteTask(task.id)
    }

    const handleToggleComplete = () => {
        onToggleComplete(task.id)
    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4 flex justify-between items-center">
            <div>
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400 italic' : ''}`}>
                    {serialNumber}: {task.text} 
                </h3>
            </div>
            <div className="flex items-center gap-4 ml-4">
                <input className="w-4 h-4"
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={handleToggleComplete} 
                />
                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded transition duration-200 ml-4"
                        onClick={handleDeleteTask}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem