import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [allArticles, setAllArticles] = useState([])
    const readBlog = async () => {
        const { data } = await axios.get("http://localhost:5000/articles/")
        setAllArticles(data)
    }
    useEffect(() => { readBlog() }, [])
    return <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                {
                    allArticles.map((item, i) => <div className={`carousel-item ${i === 0 && "active"}`}>
                        <img src={item.hero} alt="" />
                    </div>)
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
}

export default Home