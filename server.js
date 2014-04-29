var http = require('http')

var messages = [{ message: 'You are awesome', timestamp: new Date() }]

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    res.end(JSON.stringify(messages))
  } else if (req.method === 'POST') {
    var newMsg = ''
    req.on('data', function (data) {
      newMsg += data
    })
    req.on('end', function () {
      newMsg = JSON.parse(newMsg)
      newMsg.timestamp = new Date()
      messages.push(newMsg)
      res.writeHead(201, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
      res.end(JSON.stringify(messages))
    })
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
    res.end()

  }
})

server.listen(3000)