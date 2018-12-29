const path = require('path');
const webpack = require('webpack');

const loader = path.join(__dirname, '../index.js');

const config = {
    mode: 'development',
    entry: path.join(__dirname, 'fixtures/doc.mdx'),
    output: {
        path: path.join(__dirname, './output')
    },
    module: {
        rules: [
            {
                test: /\.mdx?/,
                loaders: [
                    'babel-loader',
                    loader
                ],
                exclude: /node_modules/,
            },
        ],
    },
};

webpack(config, (err, stats) => {
    if (err) console.log(err)
})