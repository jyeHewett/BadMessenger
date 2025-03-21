const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "https://frosted-prickly-huckleberry.me", // Update this to match your front-end server's URL
        methods: ["GET", "POST"]
    }
});

app.use(cors({
    origin: "https://frosted-prickly-huckleberry.me", // Update this to match your front-end server's URL
    methods: ["GET", "POST"]
}));
app.use(express.json());
app.use('/messages', messageRoutes(io));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('newUser', (name) => {
        io.emit('userJoined', name);
    });

    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Function to log that the server is ready and awaiting users
function logServerReady() {
    console.log('Server is ready and awaiting users');
}

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    logServerReady();
});