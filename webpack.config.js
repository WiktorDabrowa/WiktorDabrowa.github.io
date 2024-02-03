const path = require('path')

module.exports = {
    mode: 'development',
    entry: './static/js/src/main.js',
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'index.js'
    }
}
