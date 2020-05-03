const http = require("http");
const express = require("express");
const socketio = require("socket.io");
var path = require("path");

const app = express(); // app is an object and a function

const clientPath = path.join(__dirname, "../client"); // variable in node.js, points to current folder of current module
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath)); // middleware to serve static files

const server = http.createServer(app);

const io = socketio.listen(server); // pass in a server instance into socket wrapper, every time client uses socket function it will therefore reference this server

io.on("connection", (sock) => {
  console.log("Someone has connected");
  sock.emit("message", "You have been connected.");
});

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.listen(8080, () => {
  console.log("RPS started on 8080");
});
