require('babel-register')({
    presets: ['react', 'es2015']
});

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, 'public')));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(require('./routes/index.jsx'));

let PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
