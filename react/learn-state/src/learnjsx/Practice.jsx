import React from 'react'

const Practice = () => {
    let count = 0
    const fname = "ross"
    const x = 10, y = 20
    const sayMyName = () => {
        console.log("my name is john")
    }
    const inc = () => {
        count++
        console.log(count)
    }

    return <div>
        <div>Practice</div>
        <h1>{fname}</h1>
        <h1>value of x = {x} and value of y = {y} and sum = {x + y}</h1>
        <button onClick={sayMyName}>click me</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={inc}>increement</button>
    </div>

}

export default Practice