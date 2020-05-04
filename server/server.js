const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const RpsGame = require("./rps-game");
var path = require("path");

const app = express(); // app is an object and a function

const clientPath = path.join(__dirname, "../client"); // variable in node.js, points to current folder of current module
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath)); // middleware to serve static files

const server = http.createServer(app);

const io = socketio.listen(server); // pass in a server instance into socket wrapper, every time client uses socket function it will therefore reference this server

let waitingPlayer = null; // initialize nobody connected so far

io.on("connection", (sock) => {
  // for this particular socket connection, do the following:
  if (waitingPlayer) {
    // start a game, two players are playing
    new RpsGame(waitingPlayer, sock);
    waitingPlayer = null; // nobody waiting anymore
  } else {
    waitingPlayer = sock; // player connects, but no one is waiting for them, so assign them as the waiting player
    waitingPlayer.emit("message", "Waiting for an opponent...");
  }

  sock.on("message", (text) => {
    // sock.emit just sends to a single particular client
    io.emit("message", text); // io.emit sends to EVERYONE who is connected, including that who sent it
  });
});

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.listen(8080, () => {
  console.log("RPS started on 8080");
});
