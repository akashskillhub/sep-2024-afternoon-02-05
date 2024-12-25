import React, { useState } from 'react'
import axios from "axios"
const Todo = () => {

    /*
        create      post     url , body
        read        get      url
        update      patch    url+id, body
        delete      delete   url+id
    */
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        //                👇 endpoint                  👇 body
        await axios.post("http://localhost:5000/users", { fname, lname, password })
        console.log("user register success")
    }
    const getAllUsers = async () => {
        const { data } = await axios.get("http://localhost:5000/users")
        console.log(data)
    }
    const updateUser = async () => {
        await axios.patch("http://localhost:5000/users/1", { fname: "ethan", lname: "galler" })
        console.log("user update success")
    }
    const deleteUser = async () => {
        await axios.delete("http://localhost:5000/users/1")
        console.log("user delete success")
    }

    // map
    // filter
    // reduce

    return <>
        <input onChange={e => setFname(e.target.value)} type="text" placeholder='enter first name' />
        <input onChange={e => setLname(e.target.value)} type="text" placeholder='enter last name' />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='enter password' />
        <button onClick={handleSubmit}>register</button>
        <button onClick={getAllUsers}>get users</button>
        <button onClick={updateUser}>update user</button>
        <button onClick={deleteUser}>delete user</button>
    </>
}

export default Todo