var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var isTest = TARGET === 'test' || TARGET === 'test-watch';

var config = {
    entry: "./src/game.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file' }
        ]
    }
};

if (isTest) {
    config = merge.smart(config, {
        module: {
            preLoaders: [
                { test:  /.js$/, exclude: [ /node_modules/, /\.spec\.js$/], loader: 'isparta-loader' }
            ]
        }
    })
}

module.exports = config