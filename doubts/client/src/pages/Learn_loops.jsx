import React from 'react'

const Learn_loops = () => {
    const arr = ["dell", "hp", "apple", "lenovo"]
    //              0      1        2       3
    for (const item of arr) {
        console.log(item)
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    let i = 0
    while (i < arr.length) {
        console.log(arr[i])
        i++
    }


    let j = 0
    do {
        console.log(arr[j])
        j++
    } while (j < arr.length)

    // forof
    // for
    // while
    // do while

    // map          data transform
    // filter       data filter
    // reduce       return single value
    const x = arr.map(item => <h1>{item}</h1>)
    console.log(x)

    const y = arr.filter(item => item !== "dell")
    console.log(y)

    const nums = [10, 20, 30, 40]
    let sum = 0
    for (const item of nums) {
        sum = sum + item
    }

    const total = nums.reduce((sum, item) => sum + item, 0)
    console.log(total)

    return (
        <div>Learn_loops</div>
    )
}

export default Learn_loops