import TodoItem from "./TodoItem.jsx"

function TodoList (props) {
    const { tasks, onDeleteTask } = props;

    return (
        <div>
            {
                tasks.map(task => (
                    <TodoItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
                ))
            }
        </div>
    )
}

export default TodoList