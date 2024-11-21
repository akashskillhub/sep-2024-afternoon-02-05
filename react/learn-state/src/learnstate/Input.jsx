import React, { useState } from 'react'

const Input = () => {
    const [fname, setFname] = useState()
    let x
    const handleChange = e => {
        // setFname(e.target.value)
        x = e.target.value
    }
    const show = () => {
        setFname(x)
    }
    return <div>
        <h1>{fname}</h1>
        <input type="text" onChange={handleChange} />
        <button onClick={show}>show</button>

    </div>
}

export default Input