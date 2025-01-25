import React, { useEffect, useState } from 'react'
import { useLazyGetTodosQuery } from '../redux/todo.api'

const Todo = () => {
    const [pagi, setPagi] = useState({ limit: 2, skip: 0 })
    //      👇 anything you want
    const [getTodos, { data, isLoading }] = useLazyGetTodosQuery()

    useEffect(() => {
        getTodos(pagi)
    }, [pagi])
    return <>

        <select value={pagi.limit} onChange={e => setPagi({ skip: 0, limit: +e.target.value })}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

        {
            data && [...Array(Math.ceil(data.total / pagi.limit))].map((item, index) => <button
                onClick={e => setPagi({ ...pagi, skip: pagi.limit * index })}>
                {index}
            </button>)
        }

    </>
}

export default Todo