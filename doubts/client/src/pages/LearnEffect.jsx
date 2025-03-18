import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        console.log("effect")
        return () => {
            console.log("cleanup")
        }
    }, [count])
    return <>
        <div>LearnEffect</div>
        <button onClick={e => setCount(count + 1)}>+1</button>
    </>

}

export default LearnEffect