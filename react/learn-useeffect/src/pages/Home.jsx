import React, { useEffect, useState } from 'react'

const Home = () => {
    const [tearm, setTearm] = useState("")
    const handlleChange = () => {
        console.log("changed")
    }
    // debounce
    useEffect(() => {
        const x = setTimeout(() => {
            handlleChange()
        }, 2000)

        return () => {
            clearTimeout(x)
        }
    }, [tearm])
    return <>
        <input type="text" onChange={e => setTearm(e.target.value)} />
    </>
}

export default Home
