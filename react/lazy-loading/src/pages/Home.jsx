import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(1)
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count === 5 ? {} : count + 1)}>inc</button>
    </>
}

export default Home