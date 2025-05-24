import { useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState('');
    const { onAddTask } = props;

    const handleAddTask = () => {
        onAddTask(inputText);
        setInputText('');
    }

    const handleEnterKey = (event) => {
        if (event.key == 'Enter') {
            handleAddTask();
        }
    }

    return (
        <div className="flex space-x-3 mb-6">
            <input type="text"
                placeholder='Enter a Task' 
                onChange={(t) => setInputText(t.target.value)} 
                value={inputText} 
                onKeyDown={handleEnterKey} 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50" 
                required/>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={handleAddTask}
            >
                Add
            </button>
        </div>  
    )
}

export default TodoInput