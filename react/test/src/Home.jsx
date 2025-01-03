import React from 'react'

const Home = () => {

    const arr = [10, 20, 30]

    const x = arr.map(item => <h1>hello {item}</h1>)

    return <>
        {x}
    </>
}

export default Home