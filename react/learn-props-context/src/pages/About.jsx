import React from 'react'

const About = ({ users }) => {
    console.log(users)

    return <>
        <div>About</div>
        <Test x="dell" y="hp" />
    </>

}
//            👇 prop
const Test = ({ x, y }) => {
    console.log(x)
    console.log(y)

    return <div>
        test
    </div>
}

export default About