import Child from "./Child"

const Parent = ({ data }) => {
    return <div>
        <h1>parent</h1>
        <hr />
        <Child>{data}</Child>
    </div>
}

export default Parent