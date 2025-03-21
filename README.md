# Real-Time Messaging Application

This project is a real-time messaging application built with Node.js, Express, and WebSocket. It allows users to send and receive messages in real-time.

## Features

- Real-time messaging using WebSocket
- Message broadcasting to all connected clients
- Simple message model with properties like id, content, sender, and timestamp

## Project Structure

```
real-time-messaging-app
├── src
│   ├── server.js               # Entry point of the application
│   ├── controllers
│   │   └── messageController.js # Handles message sending and receiving
│   ├── models
│   │   └── messageModel.js      # Defines the message object
│   ├── routes
│   │   └── messageRoutes.js      # Sets up message-related routes
│   └── services
│       └── messageService.js     # Contains message processing methods
├── package.json                 # npm configuration file
└── README.md                    # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd real-time-messaging-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Open your browser and connect to the WebSocket server to start sending and receiving messages.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.