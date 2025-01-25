import React, { useCallback, useState } from 'react'

const LearnUseCallback = () => {
    const [theme, setTheme] = useState("dark")
    //              👇cache function
    const test = useCallback(() => {
        // 1000 line
        console.log("test fn");

    }, [])
    console.log(test)

    return <>
        <h1>{theme}</h1>
        <div>LearnUseCallback</div>
        <button onClick={e => setTheme(theme === "dark" ? "light" : "dark")}>toogle</button>
    </>

}

export default LearnUseCallback