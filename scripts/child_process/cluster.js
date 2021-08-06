const cluster = require('cluster')
const http = require('http')
if (cluster.isMaster) {
    const cpuNum = require('os').cpus().length
    console.log(cpuNum)
    for(var i=0;i<cpuNum;i++) {
        cluster.fork()
    }
    cluster.on('line', function(worker) {
        console.log(`worker ${worker.process.id} is online`)
    })
    cluster.on('exit', function(worker, code, signal) {
        console.log(`exit worker:${worker.process.id} code:${code} signal:${signal}`)
        cluster.fork()
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('cluster started')
    }).listen(9999)
    console.log(`worker ${process.pid} is running`)
}