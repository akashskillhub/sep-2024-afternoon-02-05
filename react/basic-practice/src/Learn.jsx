import React from 'react'

const Learn = () => {
    let n = 10
    const x = "dell"
    const num = 10
    const arr = ["dell", "hp", "apple"]
    const obj = { name: 'ross' }

    const test = () => {
        n = 100
        console.log("test called", n)

        // useState()
        // useEffect()
    }
    return <div>
        <div>Learn {x}</div>
        <p>{num}</p>
        <p>{arr}</p>
        <p>{obj.name}</p>
        <button onClick={test}>click me</button>
        <hr />
        <h1>{n}</h1>
    </div>

}

export default Learn