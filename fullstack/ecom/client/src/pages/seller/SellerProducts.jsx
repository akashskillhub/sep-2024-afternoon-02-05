import * as yup from "yup"
import { useFormik } from "formik"
import { handleClasses } from "../../utils/handleClasses"
import { useEffect, useState } from "react"
import { useCreateProductMutation, useLazyReadProductsQuery, useModifyProductMutation, useRemoveProductMutation } from "../../redux/apis/seller.api"
import Loading from "../../components/share/Loading"
import { toast } from "react-toastify"


const SellerProducts = () => {
    const [getProducts, { data }] = useLazyReadProductsQuery()
    const [addProduct, { isLoading, isSuccess, isError, error }] = useCreateProductMutation()

    const [updateProduct] = useModifyProductMutation()
    const [deleteProduct, { isSuccess: deleteSuccess, isLoading: deleteIsLoading }] = useRemoveProductMutation()

    const [preview, setPreview] = useState()
    const formik = useFormik({
        initialValues: {
            name: "",
            category: "",
            price: "",
            desc: "",
            images: "",
            stock: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            category: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            images: yup.string().required(),
            stock: yup.string().required(),

        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("category", values.category)
            fd.append("price", values.price)
            fd.append("desc", values.desc)
            fd.append("stock", values.stock)

            for (const key in values.images) {
                if (key != "length" && key !== "item") {
                    fd.append("images", values.images[key])
                }
            }
            addProduct(fd)
            resetForm()
        }
    })

    const handleChange = e => {
        const obj = e.target.files
        formik.setFieldValue("images", obj)
        const img = []
        for (const key in obj) {
            if (key != "length" && key != "item") {
                img.push(URL.createObjectURL(obj[key]))
            }
        }
        setPreview(img)
    }


    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        if (isSuccess) {
            toast.success("product create sucess")
        }
    }, [isSuccess])
    useEffect(() => {
        if (deleteSuccess) {
            toast.success("product delete sucess")
        }
    }, [deleteSuccess])

    if (isLoading || deleteIsLoading) {
        return <Loading />
    }
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">Add Product</div>
                            <div class="card-body">
                                <div>
                                    <label class="form-label">Product name</label>
                                    <input
                                        {...formik.getFieldProps("name")}
                                        type="text"
                                        className={handleClasses(formik, "name")}
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">Product Category</label>
                                    <select class="form-select" {...formik.getFieldProps("category")}>
                                        <option selected>Product Category</option>
                                        <option value="electronics">electronics</option>
                                        <option value="furniture">furniture</option>
                                        <option value="shoe">shoe</option>
                                    </select>
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a category.</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">Price</label>
                                    <input
                                        {...formik.getFieldProps("price")}
                                        type="number"
                                        className={handleClasses(formik, "price")}
                                        placeholder="Enter Your Price of Product"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please give a valid price</div>
                                </div>

                                <div class="mt-2">
                                    <label class="form-label">Desc</label>
                                    <input
                                        {...formik.getFieldProps("desc")}
                                        type="text"
                                        className={handleClasses(formik, "desc")}
                                        placeholder="Enter the Product Desc"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please give the produc desc</div>
                                </div>

                                <div class="mt-2">
                                    <label class="form-label">Photo</label>
                                    <input
                                        multiple
                                        onChange={handleChange}
                                        type="file"
                                        className={handleClasses(formik, "images")}
                                        placeholder="Upload Your Photo"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a  images</div>
                                </div>
                                {
                                    preview && preview.map(item => <img src={item} height={50} alt="" />)
                                }
                                <div class="mt-2">
                                    <label class="form-label">Stock</label>
                                    <input
                                        {...formik.getFieldProps("stock")}
                                        type="text"
                                        className={handleClasses(formik, "stock")}
                                        placeholder="Enter Your Stock"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please add stock</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Add
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="container">
            {
                data && <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>category</th>
                            <th>price</th>
                            <th>desc</th>
                            <th>images</th>
                            <th>stock</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(item => <tr>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.desc}</td>
                                <td>{item.images.map(img => <img src={img} height={50} alt="" />)}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <button type="button" class="me-2 btn btn-outline-warning">edit</button>
                                    <button onClick={e => deleteProduct(item._id)} type="button" class="me-2 btn btn-outline-danger">remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    </>
}

export default SellerProducts