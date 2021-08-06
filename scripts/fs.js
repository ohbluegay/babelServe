const fs = require('fs')
const path = require('path')

fs.readdir(path.resolve(__dirname, '../file'), (err, files) => {
    if (err) return console.log(err)
    files.map(item => {
        if (item.match(/\.html$/)) {
            fs.readFile(path.resolve(__dirname, `../file/${item}`), 'utf-8', (err, data) => {
                ['theme', 'sensors'].map(sub => {
                    const reg = new RegExp(`(${sub}\\.\)\.\*\(js\)`, 'g')
                    data = data.replace(reg, `${sub}.${new Date().getTime()}.js`)
                })
                fs.writeFile(path.resolve(__dirname, `../file/${item}`), data, (e) => {
                    if (e) console.log(e)
                })
            })
        }
    })
})