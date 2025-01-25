import React, { useReducer } from 'react'


//                      👇{ count: 500 }
const counterReducer = (state, action) => {
    if (action.type === "INC") {
        return { count: state.count + action.payload }
    }
    if (action.type === "DEC") {
        return { count: state.count - action.payload }
    }
    return state
}

const LearnUseReducer = () => {
    const [{ count }, dispatch] = useReducer(counterReducer, { count: 500 })
    return <>
        <h1>{count}</h1>
        <button onClick={e => dispatch({ type: "INC", payload: 2 })}>+2</button>
        <button onClick={e => dispatch({ type: "DEC", payload: 1 })}>-1</button>

    </>
}

export default LearnUseReducer