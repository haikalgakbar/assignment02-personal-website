import Typed from "typed.js";
const confetti = require("canvas-confetti");

const confettiBtn = document.querySelector("#confetti");

const typed = new Typed("#typed", {
  strings: ["there 👋", "mysterious creature 👽", "internet surfer 👨‍💻"],
  typeSpeed: 50,
  loop: true,
});

const myConfetti = confetti.create(null, {
  resize: true,
  useWorker: true,
});

confettiBtn.addEventListener("click", () => {
  myConfetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });
});
