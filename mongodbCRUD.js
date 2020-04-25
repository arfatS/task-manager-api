const { MongoClient, ObjectID} = require('mongodb')

const connection = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

// const id = new ObjectID
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database...')
    }
    console.log('Connected...')
    const db = client.db(database)

    //CREATE

    // db.collection('users').insertOne({
    //     name: 'Varun Dhawan',
    //     age: 32
    // }).then((result)=>{
    //     console.log(result.ops)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Karthik Aaryan',
    //     age: 27
    // },{
    //     name: 'Janvi Kapoor',
    //     age: 24
    // }]).then((result)=>{
    //     console.log(result.ops)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //READ
    
    // db.collection('users').findOne({
    //     _id: new ObjectID("5ea4026c7885eb3a70f01966")
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').find({
    //     age: 27
    // }).toArray().then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //UPDATE

    // db.collection('users').updateOne({
    //     name: 'Ajmera Singh'
    // },{
    //     $set: {
    //         age: 27
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateMany({
    //     age: 27
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    
    //DELETE

    // db.collection('users').deleteOne({
    //     name:'Rohit Kumar'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 28
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

})