const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request permission denied')
//     } else {
//         next()
//     }
// })

app.use((req, res, next) => {
    res.status(503).send('Site under maintenance. Please try after some time.')    
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log(`Server is running onn port ${port}`)
})
