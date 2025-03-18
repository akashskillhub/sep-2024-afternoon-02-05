import React, { useEffect, useState } from 'react'

const Learn_Debounce = () => {
    const [tearm, setTearm] = useState()
    useEffect(() => {
        let id
        if (tearm) {
            id = setTimeout(() => {
                console.log("api call")
            }, 2000)
        }
        return () => {
            clearTimeout(id)
        }
    }, [tearm])
    return <>
        <input
            onChange={e => setTearm(e.target.value)}
            type="text"
            placeholder='search anything' />
    </>
}

export default Learn_Debounce