const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/job'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongoose connect succeed!')
})

const User = mongoose.model('users', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))

// User.create({
//     name: 'react-thunk',
//     age: 18
// }, function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({name: 'react-thunk'}, function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.update({name: 'react'}, {'$set': {age: 30}}, function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

const app = express()

app.get('/', function(req, res){
    res.send('hello react and express!')
})

app.get('/data', function(req, res){
    User.find({}, function(err, doc){
        if(!err){
            res.json(doc)
        }
    })
    // res.json({
    //     name: 'labike',
    //     age: 18
    // })
})

app.listen(3333, function(){
    console.log('server running at 3333 port')
})