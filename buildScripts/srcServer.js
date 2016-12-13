import express from 'express';
import path from 'path';

const app = express();

const port = process.env.PORT;
const host = process.env.IP;

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html')); 
});

app.listen(port, host, function(err) {
    if(err) {
        console.log(err);
    }
});