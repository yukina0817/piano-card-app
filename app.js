const level1 = [
  "images/c1.png",
  "images/d1.png",
  "images/e1.png",
  "images/f1.png",
  "images/g1.png",
  "images/a1.png",
  "images/h1.png",
  "images/c2.png"
];
const level2 = [
  "images/g.png",
  "images/a.png",
  "images/h.png",
  "images/c1.png",
  "images/d1.png",
  "images/e1.png",
  "images/f1.png",
  "images/g1.png",
  "images/a1.png",
  "images/h1.png",
  "images/c2.png",
  "images/d2.png",
  "images/e2.png",
  "images/f2.png",
  "images/g2.png",
  "images/a2.png",
  "images/h2.png",
  "images/c3.png",
  "images/d3.png",
  "images/e3.png",
];
const level3 = [
  "images/base.c.png",
  "images/base.d.png",
  "images/base.e.png",
  "images/base.f.png",
  "images/base.g.png",
  "images/base.a.png",
  "images/base.h.png",
  "images/base.c1.png"
];
const level4 = [
  "images/base.cc1.png",
  "images/base.dd1.png",
  "images/base.ee1.png",
  "images/base.ff1.png",
  "images/base.gg1.png",
  "images/base.aa1.png",
  "images/base.hh1.png",
  "images/base.c.png",
  "images/base.d.png",
  "images/base.e.png",
  "images/base.f.png",
  "images/base.g.png",
  "images/base.a.png",
  "images/base.h.png",
  "images/base.c1.png",
  "images/base.d1.png",
  "images/base.e1.png",
];
const level5 = [
  "images/g.png",
  "images/a.png",
  "images/h.png",
  "images/c1.png",
  "images/d1.png",
  "images/e1.png",
  "images/f1.png",
  "images/g1.png",
  "images/a1.png",
  "images/h1.png",
  "images/c2.png",
  "images/d2.png",
  "images/e2.png",
  "images/f2.png",
  "images/g2.png",
  "images/a2.png",
  "images/h2.png",
  "images/c3.png",
  "images/d3.png",
  "images/e3.png",
  "images/base.cc1.png",
  "images/base.dd1.png",
  "images/base.ee1.png",
  "images/base.ff1.png",
  "images/base.gg1.png",
  "images/base.aa1.png",
  "images/base.hh1.png",
  "images/base.c.png",
  "images/base.d.png",
  "images/base.e.png",
  "images/base.f.png",
  "images/base.g.png",
  "images/base.a.png",
  "images/base.h.png",
  "images/base.c1.png",
  "images/base.d1.png",
  "images/base.e1.png",
]
const level6 = [
  "onkai/c-e1.png",
  "onkai/c-e2.png",
  "onkai/c-e3.png",
  "onkai/c-e4.png",
  "onkai/c-e5.png",
  "onkai/c-e5.png",
  "onkai/c-e6.png",
  "onkai/c-e7.png",
  "onkai/c-e8.png",
  "onkai/c-e9.png",
  "onkai/c-e10.png",
  "onkai/c-e11.png",
  "onkai/c-e12.png",
];
const level7 = [
  "onkai/c-g.001.png",
  "onkai/c-g.002.png",
  "onkai/c-g.003.png",
  "onkai/c-g.004.png",
  "onkai/c-g.005.png",
  "onkai/c-g.006.png",
  "onkai/c-g.007.png",
  "onkai/c-g.008.png",
  "onkai/c-g.009.png",
  "onkai/c-g.010.png",
  "onkai/c-g.011.png",
  "onkai/c-g.012.png",
  "onkai/c-g.013.png",
  "onkai/c-g.014.png",
  "onkai/c-g.015.png",
  "onkai/c-g.016.png",
  "onkai/c-g.017.png",
  "onkai/c-g.018.png",
  "onkai/c-g.019.png",
  "onkai/c-g.020.png",
  "onkai/c-g.021.png",
  "onkai/c-g.022.png",
  "onkai/c-g.023.png",
  "onkai/c-g.024.png",
  "onkai/c-g.025.png",
  "onkai/c-g.026.png",
  "onkai/c-g.027.png",
  "onkai/c-g.028.png",
  "onkai/c-g.029.png",
  "onkai/c-g.030.png", 
];

let currentCards = level1;

const card = document.getElementById("card");

let currentIndex = -1;

let history = [];
let historyPosition = -1;
let remainingCards = [];
let solvedCount = 0;

console.log(currentCards.length);

resetRemainingCards();
updateProgress();

function showRandomCard() {

 if (remainingCards.length === 0) {

    alert("全問終了！もう一度スタートします");

    resetRemainingCards();
}

const position =
    Math.floor(Math.random() * remainingCards.length);

const randomIndex =
    remainingCards[position];

remainingCards.splice(position, 1);
solvedCount++;

updateProgress();

 currentIndex = randomIndex;
history.push(currentIndex);
historyPosition = history.length - 1;

card.innerHTML = `
<img src="${currentCards[currentIndex]}" class="note-image">
`;
}

function setLevel(level) {

 if (level === 1) {
  currentCards = level1;
}

if (level === 2) {
  currentCards = level2;
}

if (level === 3) {
  currentCards = level3;
}

if (level === 4) {
  currentCards = level4;
}

if (level === 5) {
  currentCards = level5;
}

if (level === 6) {
  currentCards = level6;
}

if (level === 7) {
  currentCards = level7;
}
resetRemainingCards();
updateProgress();

history = [];
historyPosition = -1;

showRandomCard();
}

card.addEventListener("click", showRandomCard);

let startX = 0;

card.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

card.addEventListener("touchend", (event) => {

  let endX = event.changedTouches[0].clientX;

  let diff = endX - startX;

  if (Math.abs(diff) > 50) {
    showRandomCard();
  }
});
function resetRemainingCards() {

    remainingCards = [];

    for (let i = 0; i < currentCards.length; i++) {
        remainingCards.push(i);
    }

    solvedCount = 0;
}
function updateProgress() {

    document.getElementById("progress").textContent =
       `${solvedCount} / ${currentCards.length}`
}
function showPreviousCard() {

    if (historyPosition <= 0) {
        return;
    }

    historyPosition--;

    const previousIndex = history[historyPosition];

    card.innerHTML = `
    <img src="${currentCards[previousIndex]}" class="note-image">
    `;
}