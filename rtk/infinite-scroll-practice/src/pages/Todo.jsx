import React, { useEffect, useState } from 'react'
import { useLazyGetTodosQuery } from '../redux/todo.api'
import { useSelector } from 'react-redux'
import InfiniteScroll from "react-infinite-scroll-component"

const Todo = () => {


    const [index, setIndex] = useState(1)
    const [pagi, setPagi] = useState({ limit: 2, skip: 0 })

    const { todos, total } = useSelector(state => state.notes)
    const [fetchTodo, { data }] = useLazyGetTodosQuery()

    const handleNext = () => {
        fetchTodo({ limit: 2, skip: 2 * index })
        setIndex(index + 1)
    }
    useEffect(() => { fetchTodo(pagi) }, [])
    return <>

        {
            todos && <InfiniteScroll
                loader={<div className='spinner spinner-border'></div>}
                endMessage={<div className='bg-danger'>end</div>}
                dataLength={todos.length} // current todo length
                hasMore={todos.length != total} // fetch until all todos which is 10
                next={handleNext} // will call on scroll
            >
                {
                    todos.map(item => <div key={item.id} className='bg-info vh-100 my-3'>
                        <h1>{item.id} {item.task}</h1>
                    </div>)
                }
            </InfiniteScroll>
        }
    </>
}

export default Todo