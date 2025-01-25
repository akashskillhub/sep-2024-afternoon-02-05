import React, { useRef } from 'react'

const DropBox = () => {
    const fileRef = useRef()
    return <>
        <input style={{ display: "none" }} type="file" ref={fileRef} />

        <div style={{
            border: "2px dashed red",
            height: "50px"
        }} onClick={e => fileRef.current.click()}></div>
    </>
}

export default DropBox