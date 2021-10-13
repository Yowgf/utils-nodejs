const fs = require('fs')
const filename = 'pleasePutAnActualJsonFileName'
// Use fs.readFile for async reading (have to provide callback)
const body = fs.readFileSync(filename)
const json = JSON.parse(body)
