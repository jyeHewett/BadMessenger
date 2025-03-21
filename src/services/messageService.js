class MessageService {
    constructor() {
        this.messages = []; // In-memory storage for messages
    }

    saveMessage(message) {
        this.messages.push(message);
        return message;
    }

    getAllMessages() {
        return this.messages;
    }
}

module.exports = MessageService;