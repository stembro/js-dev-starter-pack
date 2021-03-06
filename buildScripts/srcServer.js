import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app = express();
const compiler = webpack(config);
const defaultPort = 3000;
const defaultHost = '127.0.0.1';

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {id:1,firstName:"Stephen",lastName:"Brown",email:"ontheheap@gmail.com"},
  ]);
});

app.listen(process.env.PORT || defaultPort, process.env.IP || defaultHost, function(err) {
    if(err) {
        console.log(err);
    }
});