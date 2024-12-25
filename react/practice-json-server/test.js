const arr = [
    { title: "t1", desc: "d1" },
    { title: "t2", desc: "d2" }
]
// const arr = [2, 3, 4]
// find

// const result = arr.find(item => item === "hp")
// const result = arr.filter(item => item < 1)
// const result = arr.map(item => item * item) // transform data
const result = arr.map(item => `<h1>${item.title}</h1>`) // transform data
console.log(result)
