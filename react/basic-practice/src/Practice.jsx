import React from 'react'

const Practice = () => {
    const sayHello = () => {
        console.log("hello from React")
    }
    return <div>
        <h1>Lorem, ipsum dolor</h1>
        <p>Lorem ipsum dolor sit </p>
        <button onClick={sayHello}>click me</button>
    </div>
}

export default Practice