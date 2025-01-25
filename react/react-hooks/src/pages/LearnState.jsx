import React, { useState } from 'react'

const LearnState = () => {
    const [count, setCount] = useState(0)
    const inc = () => {
        // setCount(count + 1)
        // setCount(count + 1)

        setCount(pre => {
            pre++
            pre++
            return pre
        })
        // console.log(count)

    }
    return <>
        <h1>{count}</h1>
        <button onClick={inc}>+1</button>
    </>
}

export default LearnState