import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// middleware
const Protected = ({ children }) => {
    const { user } = useSelector(state => state.auth)
    return user ? children : <Navigate to="/login" />
}

export default Protected