const demo = () => {
}
const test = arg => {
    return [arg, demo]
}

const [x, y] = test(10) //[10, demo()=>{}]