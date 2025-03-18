import React, { useState } from 'react'

const Learn_state = () => {
    const [count, setCount] = useState({ qty: 1 })
    return <>
        <div>
            <button
                disabled={count.qty === 0}
                onClick={e => setCount({ qty: count.qty === 0 ? 0 : count.qty - 1 })}>
                {count.qty === 0 ? "bas kar" : "-1"}
            </button>
            <strong style={{ color: count.qty === 0 || count.qty === 5 ? "red" : "" }}>{count.qty}</strong>
            {
                count.qty !== 5 && <button
                    disabled={count.qty === 5}
                    onClick={e => setCount({ qty: count.qty === 5 ? 5 : count.qty + 1 })}>
                    +1
                </button>
            }
        </div>
    </>
}

export default Learn_state