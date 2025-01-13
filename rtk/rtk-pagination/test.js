const total = 10
const limit = 6
const totalBtn = Math.ceil(total / limit)
console.log(totalBtn)
console.log(Array(totalBtn));
const result = [...Array(totalBtn).keys()].map(item => `<button></button>`)
console.log(result)





