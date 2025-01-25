import React, { useState } from 'react'
import TodoTable from './TodoTable'

const LearnMemo = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    return <>
        <hr />
        <input type="text" onChange={e => setTask(e.target.value)} />
        <button onClick={e => setTodos([...todos, task])}>add</button>
        <hr />
        <TodoTable data={todos} />
    </>
}

export default LearnMemo