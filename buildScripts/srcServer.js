import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

const defaultPort = 3000;
const defaultHost = '127.0.0.1';
const port = process.env.PORT || defaultPort;
const host = process.env.IP || defaultHost;

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, host, function(err) {
    if(err) {
        console.log(err);
    }
});