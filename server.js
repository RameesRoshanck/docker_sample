const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const { handleChatMessage, handleUserDisconnect } = require('./socket/socketHandlers');


const app =express();
app.use(bodyParser.json());
const server = http.createServer(app);
const io = socketIo(server);

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use("/api", routes);


// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Handle disconnection of users
//     socket.on('disconnect', async () => {
//         console.log('User disconnected');
//         const userId = getUserIdFromSocket(socket);
//         await handleUserDisconnect(userId);
//     });

//     // Handle 'chat message' event
//     handleChatMessage(io, socket);
// });

let port =3000;

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})


// Function to extract userId from socket handshake
// function getUserIdFromSocket(socket) {
//     const userId = socket.handshake.query.userId;
//     return userId;
// }
