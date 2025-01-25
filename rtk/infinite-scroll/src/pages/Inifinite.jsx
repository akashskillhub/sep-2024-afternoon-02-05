import InfiniteScroll from 'react-infinite-scroll-component'
import { useLazyGetTodosQuery } from '../redux/todo.api'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Inifinite = () => {
    const { allTodos } = useSelector(state => state.allNotes)
    const [index, setIndex] = useState(1)
    const [getTodos, { data, isLoading, isSuccess }] = useLazyGetTodosQuery()
    const [pagi, setPagi] = useState({ limit: 2, skip: 0 })

    const handleScroll = () => {
        getTodos({ ...pagi, skip: pagi.limit * index })
        setIndex(index + 1)
    }
    useEffect(() => {
        getTodos(pagi)
    }, [pagi])

    return <>
        {
            data && <InfiniteScroll
                loader={<p>Please wait ...</p>}
                endMessage={<h1> bas kar scroll karn</h1>}
                dataLength={allTodos.length}
                hasMore={allTodos.length != data.total}
                next={handleScroll} >
                {
                    allTodos.map(item => <div
                        style={{ height: "100vh", backgroundColor: "yellow", margin: 10 }}>
                        <h1>{item.id} {item.task}</h1>
                    </div>)
                }
            </InfiniteScroll>
        }
    </>
}

export default Inifinite