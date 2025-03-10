import { GoogleLogin, } from '@react-oauth/google'
import { useGoogleLoginMutation } from '../../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const UserLogin = () => {
    const navigate = useNavigate()
    const [google, { isSuccess }] = useGoogleLoginMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success("verification success")
            navigate("/checkout")
        }
    }, [isSuccess])
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3 my-5">
                <div class="card">
                    <div class="card-header">User Login</div>
                    <div class="card-body">
                        <GoogleLogin
                            onSuccess={data => google(data)}
                            onError={err => console.log(err)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default UserLogin