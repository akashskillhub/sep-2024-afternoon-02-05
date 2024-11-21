import React, { useState } from 'react'

const State = () => {
    //      THIS IS NOT 100% RIGHT
    //            👇 doucment.getElementById().innerHTML
    let [count, setCount] = useState(5)
    const inc = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    const dec = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return <div>
        <button onClick={dec}>decreement</button>
        <h1>{count}</h1>
        <button onClick={inc}>increement</button>
    </div>
}

export default State