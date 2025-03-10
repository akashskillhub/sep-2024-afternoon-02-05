import React, { useEffect, useRef } from 'react'
import Lottie from "lottie-react"
import successAnimation from "./../../assets/success.json"
import successMusic from "./../../assets/1.mp3"
import { useNavigate } from 'react-router-dom'
const Success = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/user")
        }, 5000)

        const audio = new Audio(successMusic)
        audio.play()

        return () => {
            audio.pause()
        }
    }, [])
    return <div className='d-flex justify-content-center flex-column align-items-center'>
        <div style={{ height: 400, width: 400 }} >
            <Lottie animationData={successAnimation} loop={true} />
        </div>
        <button type="button" class="btn btn-primary">Shop More</button>
    </div>
}

export default Success