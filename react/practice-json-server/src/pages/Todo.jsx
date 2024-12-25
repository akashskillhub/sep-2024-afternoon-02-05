import axios from 'axios' // npm i axios
import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [allTodos, setAllTodos] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const createTodo = async () => {
        await axios.post("http://localhost:5000/todos", { title, desc })
        console.log("todo create success")
        readTodo()
    }
    const readTodo = async () => {
        const { data } = await axios.get("http://localhost:5000/todos")
        setAllTodos(data)
    }
    const updateTodo = async () => {
        //                      👇 URL               👇id 👇 body 
        await axios.patch("http://localhost:5000/todos/1", { title: "TITLE UPDATE" })
        console.log("todo update success")
    }
    const deleteTodo = async (arg) => {
        await axios.delete("http://localhost:5000/todos/" + arg)
        console.log("todo delete success")
        readTodo()
    }
    useEffect(() => { readTodo() }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todo</div>
                        <div class="card-body">
                            <input className='form-control my-3' onChange={e => setTitle(e.target.value)} type="text" placeholder='enter title' />
                            <textarea className='form-control my-3' onChange={e => setDesc(e.target.value)} placeholder='enter description'></textarea>
                            <button className='btn btn-primary' onClick={createTodo}>add todo</button>
                        </div>
                        {/* <div class="card-footer">footer</div> */}
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    allTodos.map(item => <div className='col-sm-3 my-3'>
                        <div class="card">
                            <div class="card-header">{item.title}</div>
                            <div class="card-body">
                                {item.desc}
                                <button onClick={e => deleteTodo(item.id)} type="button" class="btn btn-danger">remove</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>




    </>
}

export default Todo