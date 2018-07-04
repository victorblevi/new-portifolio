const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    mode: devMode ? 'development' : 'production',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    devServer: {
        port: 8080,
        contentBase: "./public",
    },

    plugins: [
        //new ExtractTextPlugin('app.css'),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env'], plugins: []}
                }
            },
            {
                test: /\.s?[as]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}