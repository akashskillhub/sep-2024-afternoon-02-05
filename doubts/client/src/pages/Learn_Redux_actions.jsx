import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, reset } from '../redux/slices/counter.slice'

const Learn_Redux_actions = () => {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counter)
    return <>
        <div>Learn_Redux_actions</div>
        <button onClick={e => dispatch(dec())}>-1</button>
        <strong>{count}</strong>
        <button onClick={e => dispatch(inc())}>+1</button>

        {/* count = 0 */}
        <button onClick={e => dispatch(reset())}>reset</button>
    </>

}

export default Learn_Redux_actions