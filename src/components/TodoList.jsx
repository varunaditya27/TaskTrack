import TodoItem from "./TodoItem.jsx"

function TodoList (props) {
    const { tasks, onDeleteTask, onToggleComplete } = props;

    return (
        <div className="mt-6 bg-gray-800 p-4 rounded-md shadow-inner max-h-96 overflow-auto space-y-4">
            {
                tasks.map((task, index) => (
                    <TodoItem 
                        key={task.id} 
                        serialNumber={index + 1} 
                        task={task} 
                        onDeleteTask={onDeleteTask} 
                        onToggleComplete={onToggleComplete}
                    />
                ))
            }
        </div>
    )
}

export default TodoList