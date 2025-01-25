import React, { createContext, useContext } from 'react'

const DataContext = createContext()

const LearnContext = () => {
    const data = "dell"
    return <DataContext.Provider value={{ brand: data }}>
        <div>LearnContext</div>
        <Parent data={data} > hello </Parent>
    </DataContext.Provider>
}

const Parent = ({ data, children }) => {
    return <>
        <div>Parent</div>
        {children}
        <Child data={data} />
    </>
}
const Child = ({ data }) => {
    const { brand } = useContext(DataContext)
    return <>
        {data}
        <hr />
        {brand}
        <div>Child</div>
    </>
}

export default LearnContext