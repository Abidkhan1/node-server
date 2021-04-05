const io = require("socket.io-client");


// var socket = io();
// socket.connect('http://www.omnicode.tech/wego/socket',{
//     reconnectionDelay: 1000,
//      reconnection:true,
//     reconnectionAttempts: 10,
//     secure:true,
//      transports: ['polling', 'websocket'],
//     agent: false, // [2] Please don't set this to true
//     upgrade: false,
//     rejectUnauthorized: false
// });

const socket = io('http://omnicode.tech/wego/socket',{
    reconnectionDelay: 1000,
    reconnection:true,
    reconnectionAttempts: 10,
    secure:true,
    transports: ['polling', 'websocket'],
    agent: false, // [2] Please don't set this to true
    upgrade: false,
    rejectUnauthorized: false
});

socket.on('connect_failed', (err) => {
  console.log(`connect_failed Error ${err.message}`);
});
socket.on('disconnect', (err) => {
  console.log(`disconnect Error ${err.message}`);
});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

socket.emit("hello_conect");

socket.on("connect", () => {
    console.log(`client connected`);

    socket.emit("hello_conect",()=>{
      console.log('hello_conect fired');
    });

    socket.on("server_emit",()=>{
      console.log('Hello from Server.');
    });
  });
  