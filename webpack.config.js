const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};