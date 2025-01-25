import React from 'react'

const Test = ({ x, children }) => {

    const arr = ["dell", "hp"]
    const addData = () => {
        //                    👇 key     👇 value 
        localStorage.setItem("test", JSON.stringify(arr))
    }

    const getData = () => {
        const x = localStorage.getItem("test")
        console.log(JSON.parse(x))

    }
    const deleteData = () => {
        localStorage.removeItem("test")
    }
    return <>
        <h1>{x}</h1>
        <h1>{children}</h1>
        <button onClick={addData}> add</button>
        <button onClick={getData}> get</button>
        <button onClick={deleteData}>remove</button>
    </>
}

export default Test