const fs = require('fs')
const path = require('path')
let filePath = fs.createReadStream(path.join(__dirname, 'text.txt'),
'utf8')
filePath.on('data', (content) => console.log(content))