const express = require('express')
const app = express()
const superagent = require('superagent')
const cheerio = require('cheerio')
// supervisor 监听node文件无需重启

app.get('/', (req, res, next) => {
    const items = []
    superagent.get('https://www.jianshu.com/').end((err, sres) => {
        if (err) return next()
        const $ = cheerio.load(sres.text)
        $('#list-container .note-list li').map((index, item) => {
            const $elem = $(item)
            items.push({
                title: $elem.find('.title').text(),
                href: $elem.find('.title').attr('href'),
                author: $elem.find('.nickname').text()
            })
        })
        res.send(items)
    })
})

app.listen(3000, () => {
    console.log('server is running at 3000')
})