import axios from "axios"
import { useEffect, useState } from "react"

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [hero, setHero] = useState("")

    const URL = "http://localhost:5000/articles/"
    const createBlog = async () => {
        await axios.post(URL, { title, desc, hero })
        console.log("blog create success")
        readBlog()
    }
    const readBlog = async () => {
        const { data } = await axios.get(URL)
        console.log(data)
        setAllBlogs(data)
    }
    const updateBlog = async () => {
        await axios.patch(URL + "1", {})
        console.log("update success")
    }
    const deleteBlog = async id => {
        await axios.delete(URL + id)
        console.log("delete success")
        readBlog()
    }

    useEffect(() => { readBlog() }, [])
    return <>
        <input onChange={e => setTitle(e.target.value)} type="text" placeholder='Enter Tilte' />
        <textarea onChange={e => setDesc(e.target.value)} placeholder='Enter desc'></textarea>
        <input onChange={e => setHero(e.target.value)} type="text" placeholder='Enter Hero Image URL' />
        <button onClick={createBlog}>Add Blog</button>

        <table className="table table-bordered table-primary">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Hero</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBlogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>
                            <img src={item.hero} height={100} alt="" />
                        </td>
                        <td>
                            <button>edit</button>
                            <button onClick={e => deleteBlog(item.id)}>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Blogs

// map
// filter
// reduce
// find
// findIndex
// includes