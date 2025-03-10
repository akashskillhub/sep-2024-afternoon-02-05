let bag = [
    { _id: 1, qty: 1, name: "demo", price: 500 },
    { _id: 2, qty: 1, name: "dummy", price: 1299 },
]
let products = [
    { product: 1, qty: 1, name: "demo", price: 500 },
    { product: 2, qty: 1, name: "dummy", price: 1299 },
]

const x = bag.map(item => {
    return { ...item, product: item._id }
})
console.log(x)



