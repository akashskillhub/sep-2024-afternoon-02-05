import React from 'react'

const App = () => {
  const x = 10
  const arr = [
    { _id: 1, name: "ross", age: 20, profile: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { _id: 2, name: "rachel", age: 21, profile: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { _id: 3, name: "phebe", age: 200, profile: "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { _id: 4, name: "joe", age: 25, profile: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { _id: 5, name: "monica", age: 24, profile: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]
  return <>

    {
      arr.map(item => <div style={{ backgroundColor: "yellow", margin: "10px 0" }}>
        <p>id:  {item._id}</p>
        <h1>{item.name}</h1>
        <p>{item.age}</p>
        <img src={item.profile} height={100} alt="" />
      </div>)
    }

    <table border={1}>
      <thead>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>profile</th>
      </thead>
      <tbody>
        {
          arr.map(item => <tr>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td><img src={item.profile} height={100} alt="" /></td>
          </tr>)
        }
      </tbody>
    </table>

    <ol>
      {
        arr.map(item => <li>{item.name}</li>)
      }
    </ol>
  </>
}

export default App