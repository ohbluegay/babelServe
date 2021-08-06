process.on('message', function(data) {
    console.log('from parent:' + data)
})
process.send('child1 send')