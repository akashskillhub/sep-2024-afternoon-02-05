import React, { useState } from 'react'
import "./style.css"
const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    return <div>
        <h1>{result}</h1>
        <input
            type="number"
            onChange={e => { setNum1(+e.target.value) }} />
        <input
            type="number"
            onChange={e => { setNum2(+e.target.value) }} />

        <button style={{ backgroundColor: "red" }} onClick={e => setResult(num1 + num2)}>+</button>
        <button className='dummy' onClick={e => setResult(num1 - num2)}>-</button>
        <button onClick={e => setResult(num1 / num2)}>/</button>
        <button onClick={e => setResult(num1 * num2)}>*</button>
    </div>
}

export default Calculator