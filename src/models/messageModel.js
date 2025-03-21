class Message {
    constructor(id, content, sender) {
        this.id = id;
        this.content = content;
        this.sender = sender;
        this.timestamp = new Date();
    }
}

module.exports = Message;