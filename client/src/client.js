// Methods //////////////////////////////////////////////////

const writeEvent = (text) => {
  // <ul> element
  const parent = document.querySelector("#events");

  // <li> element
  const el = document.createElement("li");
  el.innerHTML = text;

  parent.appendChild(el);
};

const onFormSubmitted = (e) => {
  e.preventDefault();

  const input = document.querySelector("#chat");
  const text = input.value;
  input.value = "";

  sock.emit("message", text);
};

////////////////////////////////////////////////////////////

writeEvent("Welcome to Rock Paper Scissors!");

const sock = io.connect("http://localhost:8080"); // specify which server:port that IO is listening to
sock.on("message", writeEvent); // prints any events that have been emitted by the server

document
  .querySelector("#chat-form")
  .addEventListener("submit", onFormSubmitted); // runs onFormSubmitted method whenever a submit event happens
