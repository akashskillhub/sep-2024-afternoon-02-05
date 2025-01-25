import React, { memo } from 'react'

const TodoTable = ({ data }) => {
    console.log("helllo")

    return <>
        <table border={1}>
            <thead>
                <tr> <th>task</th> </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => <tr key={index}>
                        <td>{item}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default memo(TodoTable)
// export default TodoTable