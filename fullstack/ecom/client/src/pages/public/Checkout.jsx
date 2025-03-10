import { useFormik } from 'formik'
import * as yup from 'yup'

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePlaceOrderMutation } from '../../redux/apis/user.api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/share/Loading'
import { handleClasses } from '../../utils/handleClasses'

const Checkout = () => {
    const navigate = useNavigate()
    const [orderPlace, { isSuccess, isLoading, isError, error }] = usePlaceOrderMutation()
    const { bag } = useSelector(state => state.cart)

    const formik = useFormik({
        initialValues: {
            city: "",
            address: "",
        },
        validationSchema: yup.object({
            city: yup.string().required(),
            address: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            orderPlace({
                ...values,
                products: bag.map(item => {
                    return { ...item, product: item._id, }
                })
            })
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("order placed success")
            navigate("/success")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message || "unable to place order")
        }
    }, [isError])

    if (isLoading) {
        return <Loading />
    }
    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            {
                                bag.map(item => <div className="row my-2">
                                    <div className="col-sm-4">
                                        <img src={item.images[0]} className='img-fluid' alt="" />
                                    </div>
                                    <div className="col-sm-8">
                                        <h6>{item.name}</h6>
                                        <p>{item.price}</p>
                                        <strong className='mx-2'>{item.qty}</strong>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <div class="card-header">Address</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div class="card-body">
                                <input
                                    {...formik.getFieldProps("city")}
                                    type="text"
                                    placeholder='Enter city'
                                    className={handleClasses(formik, "city")} />
                                <textarea
                                    {...formik.getFieldProps("address")}
                                    className={handleClasses(formik, "address")}
                                    placeholder='address'></textarea>

                                <input type="radio" checked className='form-check-input' />
                                <label htmlFor="" className='form-check-label ms-2'>COD</label>

                                <button type="submit" class="btn btn-primary w-100 mt-3">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Checkout