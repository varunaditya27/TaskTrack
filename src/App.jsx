import { useState } from 'react'
import TodoInput from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoInput />
  )
  
}

export default App
