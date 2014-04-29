var express = require('express')
var bodyParser = require('body-parser')

var messages = [{ message: 'You are awesome', timestamp: new Date() }]
var app = express()

app.use(bodyParser())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function (req, res) {
  res.json(200, messages)
})

app.post('/', function (req, res) {
  var newMsg = req.body
  newMsg.timestamp = new Date()
  messages.push(newMsg)
  res.json(201, messages)
})

app.listen(3000)