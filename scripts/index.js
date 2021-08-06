const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const path = require('path')

const fs = require('fs')

app.use('/file', express.static(path.resolve(__dirname, '../file')))

// 跨域设置
app.all('*', function (req, res, next) {
    if (req.headers.origin) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*')
    }
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token, x-access-site")
    res.header("Access-Control-Expose-Headers", "*")
    if (req.method === 'OPTIONS') {
        return res.end()
    }
    next()
})

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// application/json
app.use(bodyParser.json())

app.use('/api', router)

// 存储文件
router.post('/setJson', (req, res) => {
    const json = JSON.stringify(req.body)
    fs.writeFile('file/index.txt', json, 'utf-8', (err) => {
        if (err) {
            res.status(500).send({
                detail: 'save failed'
            })
        }
        res.status(200).send({
            detail: 'save success'
        })
    })
})

router.get('/getJson', (req, res) => {
    fs.readFile('file/index.txt', (err, data) => {
        if (err) res.status(500).send({ detail: 'get json failed' })
        res.status(200).send({
            detail: 'success',
            data: JSON.parse(data)
        })
    })
})

app.listen(3000, () => {
    console.log('server start')
})