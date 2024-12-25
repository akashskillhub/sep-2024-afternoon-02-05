import React, { useEffect, useState } from 'react'

const About = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState(true)
    useEffect(() => {
        // onMount
        // on change in dependency after cleanup
        console.log("effect")
        return () => {
            // onUnMount
            // on change in dependency befor effect
            console.log("cleanup")
        }
    }, [])
    return <>
        <h1>{theme ? "dell" : "hp"}</h1>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <button onClick={e => setTheme(!theme)}>toggle</button>
    </>
}

export default About