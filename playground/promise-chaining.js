require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ea555000939f1191411e773', { age: 1 })
// .then((user) => {
//     console.log(user)
//     return User.countDocuments({ age : 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAndCountUser = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return {user,count}
}

updateAndCountUser('5ea5415765a7162bf02c183d', 1).then(({ user, count }) => {
    console.log(user)
    console.log(count)
}).catch((error) => {
    console.log(error)
})