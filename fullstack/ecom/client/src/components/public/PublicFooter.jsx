import { Link } from 'react-router-dom'

const PublicFooter = () => {
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h1>Flipkart - Lite</h1>
                </div>
                <div className="col-sm-4">
                    <Link to="/admin-login" className='d-block text-decoration-none'>Admin Login</Link>
                    <Link to="/seller-login" className='d-block text-decoration-none'>Seller Login</Link>
                    <Link to="/seller-register" className='d-block text-decoration-none'>Seller Register</Link>
                </div>
                <div className="col-sm-4">
                    <Link to="/admin" className='d-block text-decoration-none'>Admin Dashboard</Link>
                    <Link to="/seller" className='d-block text-decoration-none'>Seller Dashboard</Link>
                    <Link to="/user" className='d-block text-decoration-none'>User Dashboard</Link>
                </div>
            </div>
        </div>
    </div>
}

export default PublicFooter