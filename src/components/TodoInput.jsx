import React from 'react'
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
        <div>
            <input type="text" placeholder='Enter a Task' onChange={(t) => setInputText(t.target.value)} value={inputText} onKeyDown={handleEnterKey} required/>
            <button onClick={handleAddTask}>Add</button>
        </div>  
    )
}

export default TodoInput