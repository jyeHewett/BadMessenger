const express = require('express');
const MessageController = require('../controllers/messageController');

module.exports = (io) => {
    const router = express.Router();
    const messageController = new MessageController(io);

    router.post('/send', (req, res) => messageController.sendMessage(req, res));

    return router;
};