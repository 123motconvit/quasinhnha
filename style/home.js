const music = document.getElementById("bgMusic");
const home = document.getElementById("home");

/* =========================
   BẬT NHẠC SAU CLICK ĐẦU
========================= */
document.addEventListener(
  "click",
  () => {
    if (music && music.paused) music.play();
  },
  { once: true }
);

/* =========================
   GAME ĐẬP BONG BÓNG
========================= */
const balloonWrap = document.getElementById("balloons");
const game = document.getElementById("balloon-game");
const container = document.querySelector(".container");

let popped = 0;
const TOTAL = 21; // số bong bóng cần đập

function createBalloon() {
  const b = document.createElement("div");
  b.className = "balloon";
  b.style.left = Math.random() * 90 + "%";
  b.style.animationDuration = 5 + Math.random() * 3 + "s";

  b.addEventListener("click", () => {
    b.classList.add("pop");
    popped++;

    setTimeout(() => b.remove(), 300);

    if (popped >= TOTAL) finishGame();
  });

  balloonWrap.appendChild(b);

  // tự xóa nếu bay hết màn hình
  setTimeout(() => {
    if (b.parentNode) b.remove();
  }, 9000);
}

/* Tạo bong bóng liên tục */
const balloonInterval = setInterval(createBalloon, 700);

function finishGame() {
  clearInterval(balloonInterval);

  game.style.transition = "opacity 0.8s ease";
  game.style.opacity = 0;

  setTimeout(() => {
    game.remove();

    container.classList.remove("hidden");
    container.style.transition = "1s ease";
    container.style.opacity = 1;
    container.style.transform = "scale(1)";
  }, 800);
}

/* =========================
   MỞ HỘP QUÀ (ẨN HOME)
========================= */
function openGift() {
  home.classList.add("hide");
}