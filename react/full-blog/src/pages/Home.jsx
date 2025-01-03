import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const readBlogs = async () => {
        const { data } = await axios.get("http://localhost:5000/articles")
        setAllBlogs(data)
    }

    useEffect(() => { readBlogs() }, [])
    return <>
        <div className="container">
            <div className="row">
                {
                    allBlogs.map(item => <div className="col-sm-4">
                        <div class="card">
                            <img src={item.hero} className='img-fluid' alt="" />
                            <div class="card-body">
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Home