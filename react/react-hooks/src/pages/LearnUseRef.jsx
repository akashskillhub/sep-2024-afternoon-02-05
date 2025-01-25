import React, { useEffect, useRef, useState } from 'react'


const LearnUseRef = () => {
    console.log("test")

    const [fname, setFname] = useState("")
    const inputRef = useRef()

    const handleClick = () => {
        // console.log(inputRef.current.value)
        console.log(fname)

    }
    useEffect(() => {
        console.log(inputRef)
    }, [])
    return <>
        <div>LearnUseRef</div>
        {/* <input type="text" ref={inputRef} /> */}
        <input type="text" ref={inputRef} onChange={e => setFname(e.target.value)} />
        <button onClick={handleClick}>click me</button>
    </>

}

export default LearnUseRef