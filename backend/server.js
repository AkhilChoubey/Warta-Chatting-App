
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app).listen(process.env.PORT || 8000);;
var cors = require('cors');
app.use(cors({origin: 'http://akhil-warta.netlify.app'}));
const io = require('socket.io')(server,{
    cors: {
        origin: 'http://akhil-warta.netlify.app'
        // origin: 'http://127.0.0.1:5500' 
       // header: ('Access-Control-Allow-Origin', "*")
    }
}); 

const users = {};

io.on("connection", socket =>{
   // console.log("New user" ,socket.id);
    socket.on('new-user-joined', name1 =>{
        console.log('New user', name1);
        users[socket.id] = name1;
        socket.broadcast.emit('user-joined' , name1);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive',{message: message, name1: users[socket.id]});
    });
    socket.on('disconnect', message =>{
        socket.broadcast.emit('leave',{message: message, name1: users[socket.id]});
        delete users[socket.id];
    });

});

