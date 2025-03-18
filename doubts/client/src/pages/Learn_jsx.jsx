import React from 'react'

const Learn_jsx = () => {
    let count = 10
    let skills = []
    const arr = ["dell", "hp"]
    const brands = [{ name: "dell" }, { name: "hp" }]
    const isActive = false
    const handleTest = (arg) => {
        console.log("test called", arg)
    }
    const handleDemo = (arg) => {
        console.log("demo called", arg)
    }

    const handleSkills = e => {
        const { value, checked } = e.target
        if (checked) {
            skills.push(value)
        } else {
            skills = skills.filter(item => item !== value)
        }
        console.log(skills)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }
    return <>
        <div>01_Learn_jsx</div>
        <h1>{arr}</h1>
        {/* <h1>Error : {brands}</h1> */}
        <h1>{isActive ? "ho" : "nahi"}</h1>
        {/* <button onClick={handleTest}>click me</button> */}
        {/* <button onClick={e => handleTest("ethan")}>click me</button> */}
        <button onClick={e => {
            handleTest("ross")
            handleDemo("ross")
        }}>click me</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={e => {
            count++
            console.log(count)
        }}>+1</button>

        <hr />
        <input type="text" onChange={e => console.log(e.target.value)} />
        <select onChange={e => console.log(e.target.value)}>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>

        <hr />

        <input
            type="radio"
            name='gender'
            id='male'
            value="male"
            onChange={e => console.log(e.target.value)} />
        <label htmlFor="male">male</label>

        <input
            type="radio"
            name='gender'
            id='female'
            value="female"
            onChange={e => console.log(e.target.value)} />
        <label htmlFor="female">female</label>

        <hr />
        {/* <input type="checkbox" id='html' value='html' />
        <label htmlFor="html">html</label>

        <input type="checkbox" id='css' value='css' />
        <label htmlFor="css">css</label>

        <input type="checkbox" id='js' value='js' />
        <label htmlFor="js">js</label> */}

        {
            ["html", "css", "js"].map(item => <div>
                <input
                    name="skills"
                    type="checkbox"
                    id={item}
                    value={item}
                    onChange={handleSkills}
                />
                <label htmlFor={item}>{item}</label>
            </div>)
        }
        <form onSubmit={handleSubmit}>
            <button type='submit'>click me</button>
        </form>

        <input type="file" onChange={e => console.log(e.target.files)} />

    </>

}

export default Learn_jsx