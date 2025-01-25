const payload = {
    result: [1, 2],
    total: 10
}
const payload1 = {
    result: [3, 4],
    total: 10
}

const todos = payload
todos.result = [...todos.result, ...payload1.result]
console.log(todos.result);
