import React, { useCallback, useMemo, useState } from 'react'

const LearnUseMemo = () => {
    const [theme, setTheme] = useState("dark")
    // useCallabck              => cache => entire function 
    // useMemo                  => cache => function return value

    // cache return value
    const test = useMemo(() => {
        let sum = 0
        for (let i = 0; i < 1000000000; i++) {
            sum = sum + i
        }
        return sum
    }, [])

    // cache function
    const demo = useCallback(() => {
        let sum = 0
        for (let i = 0; i < 1000000; i++) {
            sum = sum + i
        }
        return sum
    }, [])
    console.log(demo)


    return <>
        <h1>{test}</h1>
        <h1>{theme}</h1>
        <div>LearnUseMemo</div>
        <button onClick={e => setTheme(theme === "dark" ? "light" : "dark")}>toggle</button>
    </>

}

export default LearnUseMemo