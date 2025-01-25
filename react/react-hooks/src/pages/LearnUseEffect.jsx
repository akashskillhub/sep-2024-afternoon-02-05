import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("effect") // mount + change in dep. array (2)
        return () => console.log("cleanup") // unmount + change in dep. array(1)
    }, [count])
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(5)}>+1</button>
    </>
}

export default LearnUseEffect