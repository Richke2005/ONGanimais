const path = require ('path')

module.exports = {
    mode: 'development',
    entry: {
        donate: './public/js/donate.js',
        adopt: './public/js/adopt.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: false
}