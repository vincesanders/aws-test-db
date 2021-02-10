const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet(), cors(), express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Dev Desk Queue API!!!' });
})

module.exports = server;