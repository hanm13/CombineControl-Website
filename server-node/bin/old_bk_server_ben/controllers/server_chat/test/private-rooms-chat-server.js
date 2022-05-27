/* author: Ajar <ajar@artizan.io> (https://artizan.io) */

const Primus  = require('primus');
const Rooms   = require('primus-rooms');
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
       fs.createReadStream(__dirname + '/private-rooms-chat-client.html').pipe(res);
});

primus = new Primus(server, {transformer: 'sockjs'});
// add rooms to Primus
primus.plugin('rooms', Rooms);

primus.on('connection', spark => {

  const ps = color_logger(spark.id);
  ps.green('Connected !!!');

  spark.on('data', (data = {}) => {
    ps.info('received message:', data);

    const {action,room,message, name} = data;

    p.magenta(`action: ${action}`);
    p.yellow(`room: ${room}`)
    p.info(`message: ${message}`)

    // join a room
    if (action === 'join') {
      spark.join(room, ()=> {
        // send message to this client
        spark.write('you joined room ' + room);
        // send message to all clients except this one
        spark.room(room).except(spark.id).write(`${spark.id} joined room ${room}`);
      });
    }

    // leave a room
    if (action === 'leave') {
      spark.leave(room, ()=> {
        // send message to this client
        spark.write('you left room ' + room);
        // send message to all clients except this one
        spark.room(room).except(spark.id).write(spark.id + ' left room ' + room);
      });
    }
    // Send a message to a room
    if(message && room) {
      p.magenta(`writing message to room  ${room}`);
      spark.room(room).write( `${name}: ${message}`);
    }
  });
});

server.listen(PORT,HOST,()=>{
    p.magenta(`server is listening on`,`${HOST}:${PORT}`);
});
