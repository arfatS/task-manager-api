require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ea55aa35f94e517a0114565')
// .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const deleteAndCountTask = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return {task, count}
}

deleteAndCountTask('5ea5351cfb129b1f5cf95684').then(({ task, count }) => {
    console.log(task)
    console.log(count)
}).catch((error) => {
    console.log(error)
})