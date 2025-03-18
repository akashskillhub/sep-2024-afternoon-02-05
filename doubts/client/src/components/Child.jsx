import { useContext } from "react"
import { DataContext } from "../pages/Learn_props"

const Child = ({ children }) => {
    const data = useContext(DataContext)
    return <div>
        <h1>Child</h1>
        <p>{children}</p>
        <p>form context : {data}</p>
    </div>
}
export default Child