const http = require("http");
const express = require("express");

const app = express(); // app is an object and a function

const server = http.createServer(app);

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.listen(8080, () => {
  console.log("RPS started on 8080");
});
