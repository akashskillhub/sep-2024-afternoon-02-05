import React, { createContext, useContext } from 'react'
import Parent from '../components/Parent'
import { StateContext } from '../App'

export const DataContext = createContext()
const Learn_props = () => {

    const brand = "dell"
    const { setDummy } = useContext(StateContext)
    setDummy(brand)
    return <DataContext.Provider value={brand}>
        <div>Learn_props</div>
        <hr />
        <Parent data={brand}>hello</Parent>
    </DataContext.Provider>
}





export default Learn_props