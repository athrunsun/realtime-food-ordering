'use strict';

const fs = require("fs");
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
    devtool: 'cheap-module-source-map',
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client',
    ],
    mode: 'development',
    output: {
        filename: 'webpack-bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['stage-1', 'react'],
                        plugins: ['react-hot-loader/babel'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // Generates an `index.html` file with the <script> injected.
        // https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates
        new HtmlWebpackPlugin({
            title: 'Real time food ordering',
            inject: true,
            template: path.resolve('src/index.html'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            WEBSOCKET_SERVER: JSON.stringify('http://localhost:7001'),
            DEFAULT_ROOM_NAME: JSON.stringify('room:food-ordering'),
            SERVER_ADDRESS: JSON.stringify('http://localhost:7001'),
            SOCKET_IO_EVENT_NAME_BROADCAST: JSON.stringify('broadcast'),
            SOCKET_IO_EVENT_NAME_USER_JOIN: JSON.stringify('userJoin'),
            SOCKET_IO_EVENT_NAME_USER_LEAVE: JSON.stringify('userLeave'),
        }),
    ],
    resolve: {
        alias: {
            components: `${__dirname}/src/components`,
            containers: `${__dirname}/src/containers`,
            actions: `${__dirname}/src/actions`,
            reducers: `${__dirname}/src/reducers`,
            configureStore: `${__dirname}/src/configureStore`,
            utils: `${__dirname}/src/utils`,
        },
    },
};

module.exports = config;
