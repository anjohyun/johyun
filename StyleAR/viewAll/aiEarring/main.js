const MODEL_TAB_SIZE = 360;
const ITEM_TAB_SIZE = 268;

const ITEM_SLIDER_SIZE = 15;
const INNER_HEIGHT = 600;
const INNER_WIDTH = 360;

let scale = 1;
let boxSize = {};
let modelType = "M";
let modelRatio = 0;

const MODEL_SRC_LIST = [
  "./assets/models/1.png",
  "./assets/models/2.jpeg",
  "./assets/models/3.jpeg",
];
const USER_SRC_LIST = ["./assets/selfie/1.jpg", "./assets/selfie/2.jpg"];
const PRESET_LIST = [
  "골드, 0.2캐럿",
  "골드, 0.3캐럿",
  "골드, 0.5캐럿",
  "실버, 0.3캐럿",
  "실버, 0.1캐럿",
  "로즈골드, 0.2캐럿",
  "로즈골드, 0.3캐럿",
  "로즈골드, 0.6캐럿",
  "화이트골드, 0.1캐럿",
];
const WHITE_ICON_LIST = {
  logo: "./assets/whiteLogo.png",
  closeIcon: "./assets/Icons/close.png",
  viewAllIcon: "./assets/Icons/viewAll.png",
  camera: "./assets/Icons/CameraBtn.png",
  moreInfo: "./assets/Icons/Exclude.png",
};
const DARK_ICON_LIST = {
  logo: "./assets/colorLogo.png",
  closeIcon: "./assets/Icons/darkClose.png",
  viewAllIcon: "./assets/Icons/darkViewAll.png",
  camera: "./assets/Icons/darkCameraBtn.png",
  moreInfo: "./assets/Icons/DarkMore.png",
};

function setScale() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const $box = document.getElementById("box");
  scale = Math.min(
    windowWidth / INNER_WIDTH,
    windowHeight / INNER_HEIGHT
  ).toFixed(4);
  $box.style.transform = `scale(${scale})`;
  boxSize = $box.getBoundingClientRect();
}

function afterLoad() {
  setScale();
}

function startLoading(ev, time) {
  const $loading = document.querySelector(".loading");
  const $ball = $loading.querySelector(".ball");
  checkStartPos($loading, ev);
  $loading.classList.add("selected");
  $ball.classList.add("fullScreen");

  if (!time) return;

  setTimeout(() => {
    $loading.classList.remove("selected");
    $ball.classList.remove("fullScreen");
  }, time);
}

function checkStartPos($el, pos) {
  const { x, y } = getPoint(pos);
  $el.style.setProperty("--spx", `${x}px`);
  $el.style.setProperty("--spy", `${y}px`);
}

function getPoint(pos) {
  const { top, left } = boxSize;
  const { clientX, clientY } = pos;
  const x = (clientX - left) / scale;
  const y = (clientY - top) / scale;
  return { x, y };
}

afterLoad();

window.addEventListener("resize", setScale);
