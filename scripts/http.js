const http = require('http')
const querystring  = require('querystring')

http.createServer((req, res) => {
    req.setEncoding('utf-8')
    let postData = ''
    req.on('data', (thunk) => {
        postData += thunk
    })
    req.on('end', () => {
        res.end(postData)
    })
}).listen(8080)
console.log('serve started')