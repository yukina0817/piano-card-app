const level1 = [
  "finger/finger-right.c-g.001.png",
  "finger/finger-right.c-g.002.png",
  "finger/finger-right.c-g.003.png",
  "finger/finger-right.c-g.004.png",
  "finger/finger-right.c-g.005.png",
  "finger/finger-right.c-g.006.png",
  "finger/finger-right.c-g.007.png",
  "finger/finger-right.c-g.008.png",
  "finger/finger-right.c-g.009.png",
  "finger/finger-right.c-g.010.png",
  "finger/finger-right.c-g.011.png",
  "finger/finger-right.c-g.012.png",
];
const level2 = [
  "finger/finger-left.c-g.001.png",
  "finger/finger-left.c-g.002.png",
  "finger/finger-left.c-g.003.png",
  "finger/finger-left.c-g.004.png",
  "finger/finger-left.c-g.005.png",
  "finger/finger-left.c-g.006.png",
  "finger/finger-left.c-g.007.png",
  "finger/finger-left.c-g.008.png",
  "finger/finger-left.c-g.009.png",
  "finger/finger-left.c-g.010.png",
  "finger/finger-left.c-g.011.png",
  "finger/finger-left.c-g.012.png",
];
const level3 = [
  "finger/finger-right.c-g.001.png",
  "finger/finger-right.c-g.002.png",
  "finger/finger-right.c-g.003.png",
  "finger/finger-right.c-g.004.png",
  "finger/finger-right.c-g.005.png",
  "finger/finger-right.c-g.006.png",
  "finger/finger-right.c-g.007.png",
  "finger/finger-right.c-g.008.png",
  "finger/finger-right.c-g.009.png",
  "finger/finger-right.c-g.010.png",
  "finger/finger-right.c-g.011.png",
  "finger/finger-right.c-g.013.png",
  "finger/finger-right.c-g.014.png",
  "finger/finger-right.c-g.015.png",
  "finger/finger-right.c-g.016.png",
  "finger/finger-right.c-g.017.png",
  "finger/finger-right.c-g.018.png",
];
const level4 = [
  "finger/finger-left.c-g.001.png",
  "finger/finger-left.c-g.002.png",
  "finger/finger-left.c-g.003.png",
  "finger/finger-left.c-g.004.png",
  "finger/finger-left.c-g.005.png",
  "finger/finger-left.c-g.006.png",
  "finger/finger-left.c-g.007.png",
  "finger/finger-left.c-g.008.png",
  "finger/finger-left.c-g.009.png",
  "finger/finger-left.c-g.010.png",
  "finger/finger-left.c-g.011.png",
  "finger/finger-left.c-g.012.png",
  "finger/finger-left.c-g.013.png", 
  "finger/finger-left.c-g.014.png",
  "finger/finger-left.c-g.015.png",
  "finger/finger-left.c-g.016.png",
  "finger/finger-left.c-g.017.png",
  "finger/finger-left.c-g.018.png",
]
const level5 = [
  "finger/finger-right.c-g1.001.png",
  "finger/finger-right.c-g1.002.png",
  "finger/finger-right.c-g1.003.png",
  "finger/finger-right.c-g1.004.png",
  "finger/finger-right.c-g1.005.png",
  "finger/finger-right.c-g1.006.png",
  "finger/finger-right.c-g1.007.png",
  "finger/finger-right.c-g1.008.png",
  "finger/finger-right.c-g1.009.png",
  "finger/finger-right.c-g1.010.png",
  "finger/finger-right.c-g1.011.png",
  "finger/finger-right.c-g1.012.png",
  "finger/finger-right.c-g1.013.png",
  "finger/finger-right.c-g1.014.png",
  "finger/finger-right.c-g1.015.png",
  "finger/finger-right.c-g1.016.png",
  "finger/finger-right.c-g1.017.png",
  "finger/finger-right.c-g1.018.png",
]

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
<img src="${currentCards[currentIndex]}" class="finger-image">
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
<img src="${currentCards[previousIndex]}" class="finger-image">
`;
}