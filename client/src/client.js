const sock = io.connect("http://localhost:8080"); // specify which server:port that IO is listening to

const writeEvent = (text) => {
  // <ul> element
  const parent = document.querySelector("#events");

  // <li> element
  const el = document.createElement("li");
  el.innerHTML = text;

  parent.appendChild(el);
};

writeEvent("Welcome to Rock Paper Scissors!");
