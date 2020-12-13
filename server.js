const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app)
const cors = require('cors');
app.use(cors());
app.options('*', cors());
const io = require("socket.io")(server, {
    cors: {
        origin: "https://martinmolina1988.github.io/twintter",
        methods: ["GET", "POST"]
    }
});
var consumer = require('./sockets/socket');
consumer.start(io);



const port = 8081;

server.listen(port, () => console.log(`listen on port ${port}`)) 