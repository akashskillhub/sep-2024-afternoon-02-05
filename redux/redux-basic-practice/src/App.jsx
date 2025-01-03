// useDispatch => to call action
// useSelector => to read redux store

import { useDispatch, useSelector } from "react-redux"
import { depositMoney, widrawAllMoney, widrawMoney } from "./redux/actions"

const App = () => {
  const callAction = useDispatch()
  const { balance } = useSelector(state => state.bank)

  return <>
    <h1>balance {balance}</h1>
    <button onClick={e => callAction(depositMoney())}>deposit</button>
    <button onClick={e => callAction(widrawMoney())}>widraw</button>
    <button onClick={e => callAction(widrawAllMoney())}>widraw all</button>
  </>

}

export default App