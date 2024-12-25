import React from 'react'

const LearnProps = ({ brands }) => {
    return <div>
        <div>LearnProps</div>
        {/* <h1>{props.brands}</h1> */}
        <h1>{brands}</h1>
        <hr />
        <Child kahihi={brands}></Child>
    </div>

}

const Child = ({ kahihi }) => {
    return <div>
        <h1>Child</h1>
        <h1>{kahihi}</h1>
    </div>
}

export default LearnProps

// context  => to avoid prop drilling