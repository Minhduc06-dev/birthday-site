const nut = document.getElementById("nut");
const loichuc = document.querySelector(".loichuc");
const cacDong = loichuc.querySelectorAll("h1, p");
const canvas = document.getElementById("phaohoa");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

function batDau() {
  nut.style.display = "none";
  hienChuLanLuot();
  chayPhaoHoa();
}

nut.onclick = batDau;

function hienChuLanLuot() {
  cacDong.forEach((dong, i) => {
    setTimeout(() => {
      dong.classList.add("hien");
    }, i * 2000 + 1000);
  });
}

let hatphao = [];

function taoHatPhao() {
  for (let i = 0; i < 5; i++) {
    hatphao.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.8,
      size: Math.random() * 3 + 1,
      mau: `hsl(${Math.random() * 360},100%,70%)`,
      tocdoX: (Math.random() - 0.5) * 2,
      tocdoY: (Math.random() - 0.5) * 2,
      alpha: 1,
      giam: Math.random() * 0.01 + 0.005
    });
  }
}

function vePhaoHoa() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hatphao.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.mau;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    p.x += p.tocdoX;
    p.y += p.tocdoY;
    p.alpha -= p.giam;
    if (p.alpha <= 0) hatphao.splice(i, 1);
  });
  ctx.globalAlpha = 1;
}

function chayPhaoHoa() {
  if (Math.random() < 0.15) taoHatPhao();
  vePhaoHoa();
  requestAnimationFrame(chayPhaoHoa);
}

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
