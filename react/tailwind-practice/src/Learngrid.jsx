import React from 'react'

const Learngrid = () => {
    return <div>

        <div className='grid  sm:grid-cols-1 md:grid-cols-3 '>
            <div className='p-4 bg-red-400'>box1</div>
            <div className='p-4 bg-blue-400'>box2</div>
            <div className='p-4 bg-green-400'>box3</div>
        </div>

        <h1>Variable sizes</h1>

        <div className='grid  grid-cols-12 '>
            <div className='col-span-6 p-4 bg-red-400'>box1</div>
            <div className='col-span-3 p-4 bg-blue-400'>box2</div>
            <div className='col-span-3 p-4 bg-green-400'>box3</div>
        </div>
    </div>
}

export default Learngrid