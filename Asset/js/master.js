document.querySelectorAll("main>p").forEach((boxes) => {
  window.addEventListener("mousemove", (e) => {
    _rect = boxes.getBoundingClientRect();
    x = e.clientX - _rect.left;
    y = e.clientY - _rect.top;
    boxes.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
  });
  boxes.addEventListener("mousemove", (e) => {
    _rect = boxes.getBoundingClientRect();
    x = e.clientX - _rect.left;
    y = e.clientY - _rect.top;
    boxes.style.background = ` radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.1),rgba(255,255,255,0))`;
  });
  boxes.addEventListener("mouseleave", (e) => {
    e.target.style.background = `black`;
  });
});
