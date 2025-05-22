import React from 'react'
import { useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState('');

    const handleAddTask = () => {
        props.onAddTask(inputText);
        setInputText('');
    }

    return (
        <div>
            <input type="text" placeholder='Enter a Task' onChange={(t) => setInputText(t.target.value)} required/>
            <button onClick={handleAddTask}>Add</button>
        </div>
    )
}

export default TodoInput