const loichuc = [
  "Chúc bạn tuổi mới thật hạnh phúc và rực rỡ 🎂💖",
  "Chúc sinh nhật thật vui và đầy tiếng cười 🥳",
  "Chúc mọi điều tốt đẹp nhất sẽ đến với bạn 🎈",
  "Thêm một tuổi, thêm nhiều niềm vui và may mắn 🎁"
];

const p = document.getElementById("loichuc");
const nut = document.getElementById("nut");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function hienthichuc() {
  const i = Math.floor(Math.random() * loichuc.length);
  p.textContent = loichuc[i];
  for (let i = 0; i < 50; i++) themConfetti();
}

nut.onclick = hienthichuc;

// Hiệu ứng bóng bay và confetti
let bongbay = [], confetti = [];

function taoBongBay() {
  bongbay.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 20 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });
}

function themConfetti() {
  confetti.push({
    x: Math.random() * canvas.width,
    y: -10,
    size: 5 + Math.random() * 5,
    speed: 2 + Math.random() * 3,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`
  });
}

function ve() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bongbay.forEach((b, i) => {
    b.y -= b.speed;
    ctx.beginPath();
    ctx.fillStyle = b.color;
    ctx.ellipse(b.x, b.y, b.size * 0.6, b.size, 0, 0, 2 * Math.PI);
    ctx.fill();
    if (b.y < -50) bongbay.splice(i, 1);
  });

  confetti.forEach((c, i) => {
    c.y += c.speed;
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    if (c.y > canvas.height) confetti.splice(i, 1);
  });
}

function capnhat() {
  if (Math.random() < 0.03) taoBongBay();
  ve();
  requestAnimationFrame(capnhat);
}

capnhat();
