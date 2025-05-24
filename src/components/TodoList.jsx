import TodoItem from "./TodoItem.jsx"

function TodoList (props) {
    const { tasks, onDeleteTask } = props;

    return (
        <div>
            {
                tasks.map((task, index) => (
                    <TodoItem key={task.id} serialNumber={index + 1} task={task} onDeleteTask={onDeleteTask} />
                ))
            }
        </div>
    )
}

export default TodoList