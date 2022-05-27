/* author: Ajar <ajar@artizan.io> (https://artizan.io) */

const Primus  = require('primus');
const http    = require('http');
const fs      = require('fs');

const color_logger = require('./utils/color_logger.js');
const p = color_logger('app.js');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer((req,res)=> {
        //log the request url
       p.info('recieved request: ',req.url);

       res.setHeader('Content-Type', 'text/html');
       fs.createReadStream(__dirname + '/public-chat-client.html').pipe(res);
});

primus = new Primus(server, {transformer: 'sockjs'});

primus.on('connection', spark => {
  const ps = color_logger(spark.id);
  ps.green('Connected !!!');
  spark.on('data', data => {
    ps.info('received message:', data);
    primus.write(data);
  });
});

server.listen(PORT,HOST,()=>{
    p.magenta(`server is listening on`,`${HOST}:${PORT}`);
});
