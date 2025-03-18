import React, { useEffect, useRef } from 'react'

const Learnref = () => {
    const box = useRef()
    const d2 = useRef()
    useEffect(() => {
        console.log(box.current)
    }, [])
    return <>
        <div>Learnref</div>
        <input type="text" autoFocus onChange={e => d2.current.focus()} />
        <input type="text" ref={d2} />
        <input type="file" ref={box} />
    </>
}

export default Learnref