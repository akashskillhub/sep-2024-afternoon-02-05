import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, widrawMoney } from './redux/store'

const App = () => {
  const [amt, setAmt] = useState(0)
  const callAction = useDispatch()
  //      👇from accountReducer                 👇 from combineReducer
  const { amount } = useSelector(state => state.bank) // getState()
  return <>
    <h1>{amount}</h1>

    <input type="number" onChange={e => setAmt(+e.target.value)} />
    <hr />
    <button onClick={e => callAction(depositMoney(amt))}>deposit</button>
    <button onClick={e => callAction(widrawMoney(amt))}>widraw</button>
  </>
}

export default App