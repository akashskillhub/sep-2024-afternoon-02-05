import React, { createContext, useContext } from 'react'

// prop drilling

const ThemeContext = createContext()
const Test = () => {
    const brand = "dell"
    const mobileBrands = ["apple", "samsung"]
    // return <ThemeContext.Provider value={brand}>
    return <ThemeContext.Provider value={{ brand, mobileBrands }}>
        <div>Test</div>
        <hr />
        <Child x={brand} />
    </ThemeContext.Provider>
}
const Child = ({ x }) => {
    return <>
        <div>child</div>
        <hr />
        <GrandChild data={x} />
    </>
}
const GrandChild = ({ data }) => {
    //   👇 from ThemeContext value prop
    const z = useContext(ThemeContext)
    return <div>
        <div>GrandChild </div>
        <h1>{data}</h1>
        <h1>{z.mobileBrands}</h1>
        <h1>{z.brand}</h1>
    </div>
}

export default Test