const MODEL_TAB_SIZE = 360;
const ITEM_TAB_SIZE = 268;

const ITEM_SLIDER_SIZE = 15;
const INNER_HEIGHT = 600;
const INNER_WIDTH = 360;

let scale = 1;
let boxSize = {};
let modelType = "M";
let curPresetIdx = 0;

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

function modelSwipe() {
  const $modelEl = document.querySelector(".float.layer");
  const modelElHammer = new Hammer($modelEl);

  let MODEL_SLIDER_SIZE = 3;

  modelElHammer.get("swipe").set({
    direction: Hammer.DIRECTION_HORIZONTAL,
  });

  let modelSliderIdx = 0;
  modelElHammer.on("swipe", onSwipe);
  function onSwipe(ev) {
    // item 영역에서 swipe
    if (ev.target.closest("#itemList")) return;
    const nextNum =
      ev.direction === 2
        ? Math.max(Math.min(modelSliderIdx + 1, MODEL_SLIDER_SIZE - 1), 0)
        : Math.max(Math.min(modelSliderIdx - 1, MODEL_SLIDER_SIZE - 1), 0);

    if (modelSliderIdx === nextNum) return;
    swipeUpdate(nextNum);
  }

  function swipeUpdate(nextNum) {
    const $modelSwiperEl = document.querySelector(".models .swiper");
    $modelSwiperEl.style.transform = `translate(${
      -1 * MODEL_TAB_SIZE * nextNum
    }px,0)`;
    modelSliderIdx = nextNum;
    indexChanged(nextNum);
  }

  function indexChanged(nextNum) {
    const $prevIndex = document.querySelector(".index.selected");
    $prevIndex?.classList.remove("selected");
    const $index = document.querySelector(`.index[data-idx="${nextNum}"]`);
    $index?.classList.add("selected");
  }

  // photo Change
  const $photoChange = document.getElementById("photoChange");
  $photoChange.addEventListener("click", photoClick);
  function photoClick(ev) {
    const curModelPhotoIdx =
      document.querySelector(".index.selected")?.dataset.idx || 0;
    const nextModelPhotoIdx = $photoChange.dataset.idx;
    if (modelType === "M") {
      changePhotoChangeSrc(MODEL_SRC_LIST, curModelPhotoIdx);
      changeModelSrc(USER_SRC_LIST, nextModelPhotoIdx);
      modelType = "U";
    } else {
      changePhotoChangeSrc(USER_SRC_LIST, curModelPhotoIdx);
      changeModelSrc(MODEL_SRC_LIST, nextModelPhotoIdx);
      modelType = "M";
    }
  }

  function changePhotoChangeSrc(list, idx) {
    const $photoChangeImg = $photoChange.querySelector("img");
    $photoChangeImg.src = list[idx];
    $photoChange.dataset.idx = idx;
  }

  function changeModelSrc(list, idx) {
    const $parent = document.querySelector(".models .swiper");
    const $indexParent = document.querySelector("#modelIndex");

    const $curChild = Array.from($parent.children);
    const $indexChild = Array.from($indexParent.children);
    MODEL_SLIDER_SIZE = list.length;

    let lastIndex = 0;
    $curChild.forEach(($el, index) => {
      const $img = $el.querySelector("img");
      if (list[index]) {
        $img.src = list[index];
      } else {
        $parent.removeChild($el);
        $indexParent.removeChild($indexChild[index]);
      }
      lastIndex = index;
    });

    if (list.length <= lastIndex + 1) return swipeUpdate(idx);

    list.forEach((src, index) => {
      if (index <= lastIndex) return;
      const $div = document.createElement("div");
      $div.classList.add("model");
      const $img = document.createElement("img");
      $img.src = src;
      const $index = document.createElement("div");
      $index.classList.add("index");
      $index.dataset.idx = index;
      $div.append($img);
      $parent.append($div);
      $indexParent.append($index);
    });

    swipeUpdate(idx);
  }
}

function itemList() {
  const $itemEl = document.querySelector("#itemList");
  const itemHammer = new Hammer($itemEl);

  itemHammer.get("swipe").set({
    direction: Hammer.DIRECTION_HORIZONTAL,
  });

  let itemSliderIdx = 0;
  itemHammer.on("swipe", onSwipe);
  function onSwipe(ev) {
    $itemEl.classList.add("pointerBlock");
    const velocity = Math.floor(Math.abs(ev.velocityX));
    const nextNum =
      ev.direction === 2
        ? Math.max(
            Math.min(itemSliderIdx + (1 + velocity), ITEM_SLIDER_SIZE - 1),
            0
          )
        : Math.max(
            Math.min(itemSliderIdx - (1 + velocity), ITEM_SLIDER_SIZE - 1),
            0
          );

    if (itemSliderIdx === nextNum) return;
    swipeUpdate(nextNum);
  }

  $itemEl.addEventListener("click", onTab);
  function onTab(e) {
    if ($itemEl.classList.contains("pointerBlock")) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const $item = e.target.closest(".item");
    if (!$item) return;

    if ($item.dataset.idx - 1 != itemSliderIdx) {
      swipeUpdate($item.dataset.idx - 1);
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function swipeUpdate(nextNum) {
    const $itemSwiperEl = document.querySelector(".itemContainer");
    const $itemProgress = document.querySelector("#itemProgress progress");
    $itemSwiperEl.style.transform = `translate(${
      -1 * ITEM_TAB_SIZE * nextNum
    }px,0)`;
    $itemProgress.setAttribute(
      "value",
      ((nextNum + 1) / ITEM_SLIDER_SIZE) * 100
    );
    itemActive(nextNum);
    $itemEl.dataset.active = nextNum;
  }

  $itemEl.addEventListener("transitionend", (e) => {
    $itemEl.classList.remove("pointerBlock");
    const idx = $itemEl.dataset.active;
    itemSliderIdx = +idx;
  });
}

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
  const $middleToast = document.querySelector("#middle");
  const $itemProgress = document.querySelector("#itemProgress progress");
  $itemProgress.setAttribute("value", (1 / ITEM_SLIDER_SIZE) * 100);
  setTimeout(() => {
    $middleToast.style.opacity = 0;
  }, 3000);
  const $modelIndex = document.querySelector(
    '#modelIndex .index[data-idx="0"]'
  );
  $modelIndex.classList.add("selected");
}

function itemActive(num) {
  const $prev = document.querySelector(".item.selected");
  $prev?.classList.remove("selected");
  const $item = document.querySelector(`.item[data-idx="${num + 1}"]`);
  $item?.classList.add("selected");
}

function likeBtn() {
  const $like = document.querySelector("#like svg");
  $like.addEventListener("click", () => {
    $like.classList.add("bounceUp");
    setTimeout(() => {
      $like.classList.remove("bounceUp");
    }, 450);
  });
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
  const { top, left } = boxSize;
  const { clientX, clientY } = pos;
  const x = (clientX - left) / scale;
  const y = (clientY - top) / scale;
  $el.style.setProperty("--spx", `${x}px`);
  $el.style.setProperty("--spy", `${y}px`);
}

function pageLoading() {
  const $viewAll = document.getElementById("viewAll");
  const $moreInfo = document.getElementById("moreInfo");

  $viewAll.addEventListener("click", (ev) => startLoading(ev));
  $moreInfo.addEventListener("click", (ev) => startLoading(ev));
}

function presetChange() {
  const $floatContainer = document.querySelector(".layer.float main");
  const $preset = document.getElementById("preset");
  $floatContainer.addEventListener("click", (e) => {
    const emptyArea =
      e.target === $floatContainer || e.target.classList.contains("container");
    if (!emptyArea) return;
    curPresetIdx =
      curPresetIdx === PRESET_LIST.length - 1 ? 0 : curPresetIdx + 1;
    $preset.textContent = PRESET_LIST[curPresetIdx];
  });
}

afterLoad();
modelSwipe();
itemList();
likeBtn();
pageLoading();
itemActive(0);
presetChange();

window.addEventListener("resize", setScale);