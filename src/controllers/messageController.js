class MessageController {
    constructor(io) {
        this.io = io;
    }

    sendMessage(req, res) {
        const message = req.body;
        this.io.emit('message', message);
        res.status(200).json({ status: 'Message sent', message });
    }

    receiveMessage(socket) {
        socket.on('message', (message) => {
            this.io.emit('message', message);
        });
    }
}

module.exports = MessageController;