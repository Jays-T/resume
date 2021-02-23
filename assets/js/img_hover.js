console.clear();
const elApp = document.querySelector(".projects-overlay");

// What we need...
// Mouse position
// Currently hovered item

document.body.addEventListener("mousemove", (event) => {
  console.log({
    x: event.clientX,
    y: event.clientY
  });

  elApp.style.setProperty("--x", event.clientX);
  elApp.style.setProperty("--y", event.clientY);
});

// Replay animation by hiding & showing the element again
let el = document.body;
el.addEventListener("click", function (e) {
  el.hidden = true;
  requestAnimationFrame(() => {
    el.hidden = false;
  });
});
