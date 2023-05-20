const path = require ('path')

module.exports = {
    mode: 'development',
    entry: {
        donate: './DAO/animalDAO.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: false
}