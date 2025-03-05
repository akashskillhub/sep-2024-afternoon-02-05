import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const SellerProtected = ({ children }) => {
    const { seller } = useSelector(state => state.auth)
    return seller ? children : <Navigate to="/seller-login" />
}

export default SellerProtected