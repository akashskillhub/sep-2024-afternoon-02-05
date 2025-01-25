import React, { useEffect, useState } from 'react'
import { useLazyGetNotesQuery } from '../redux/todo.api'

const Todo = () => {
    const [btn, setBtn] = useState()
    const [skip, setSkip] = useState(0)

    //     👇fn     👇object destructuring at index 1
    const [getNotes, { data, isLoading, isSuccess }] = useLazyGetNotesQuery()

    const [limit, setLimit] = useState(2)

    useEffect(() => {
        //      👇 sending object bcz query and mutaion accepts single argument
        getNotes({ limit, skip })
    }, [limit, skip])

    useEffect(() => {
        if (data) {
            const arr = []
            for (let i = 0; i < Math.ceil(data.total / limit); i++) {
                arr.push(i)
            }
            setBtn(arr)
        }
    }, [isSuccess, limit])
    return <>
        <select onChange={e => setLimit(+e.target.value)}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
        {
            data && <table border={1}>
                <thead>
                    <th>id</th>
                    <th>task</th>
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
            btn && btn.map(item => <button onClick={e => setSkip(item * limit)}>{item}</button>)
        }
    </>
}

export default Todo