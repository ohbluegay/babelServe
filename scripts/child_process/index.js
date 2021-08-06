const child_process = require('child_process')
const path = require('path')
const resolve = function(url) {
    return path.resolve(__dirname, url)
}

// const child1 = child_process.fork(resolve('./child1.js'))
// child1.on('message', function(data) {
//     console.log('from child:' + data)
// })
// child1.send('parent send')

// child_process.exec(`cat ${resolve('../../file/cx.txt')}`, function(error, stdout, stderr) {
//     console.log(error, stdout)
// })

const write = child_process.spawn('cat', ['index.txt'], { stdio: 'inherit', cwd: resolve('../../file') })
write.on('exit', function(code, signal) {
    console.log('已退出:' + code)
})

