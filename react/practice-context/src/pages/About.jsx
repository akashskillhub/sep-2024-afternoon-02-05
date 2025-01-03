import React from 'react'

const About = ({ loggedIn }) => {
    return <>
        <div>About</div>
        {
            loggedIn && <div>
                <h1>name : {loggedIn.name}</h1>
                <h1>email : {loggedIn.email}</h1>
                <h1>password : {loggedIn.password}</h1>
            </div>
        }
    </>

}

export default About