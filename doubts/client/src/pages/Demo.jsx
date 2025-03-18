import React from 'react'
import Header from '../components/Header'

const Demo = () => {
    // send this to footer
    const user = {
        name: "ross",
        age: 20
    }
    return <>
        <div>Demo</div>
        <Header data={user}>
            {/* show this in header */}
            <input type="text" placeholder='enter username' />
            <button>Login</button>
        </Header>
    </>

}

export default Demo