const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/new-chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('connection success!')
})
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// User.create({
//   user: 'labike',
//   age: 18
// }, function(err, doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
// User.remove({age: 18}, function(err, doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
// User.update({user: 'labike1'}, {'$set': {age: 21}}, function(err, doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
User.findOne({user: 'labike1'}, function(err, doc){
  if(!err){
    console.log(doc)
  }else{
    console.log(err)
  }
})

const app = express()

app.get('/', function(req, res){
  res.send('<h1>hello world!</h1>')
})

app.get('/data', function(req, res){
  User.find({}, function(err, doc){
    if(!err){
      res.json(doc)
    }else{
      console.log(err)
    }
  })

})

app.listen(9093, function(){
  console.log('server run at port 9093')
})
