import path from 'path';
import express from 'express';
import compression from 'compression';

const defaultPort = 3000;
const defaultHost = '127.0.0.1';

const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../dist/index.html'));
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