const level1 = [
  "sound/otonojyunnbann.001.png",
  "sound/otonojyunnbann.002.png",
  "sound/otonojyunnbann.003.png",
  "sound/otonojyunnbann.004.png",
  "sound/otonojyunnbann.005.png",
  "sound/otonojyunnbann.006.png",
  "sound/otonojyunnbann.007.png",
];
const level2 = [
  "sound/otonojyunnbann.008.png",
  "sound/otonojyunnbann.009.png",
  "sound/otonojyunnbann.010.png",
  "sound/otonojyunnbann.011.png",
  "sound/otonojyunnbann.012.png",
  "sound/otonojyunnbann.013.png",
  "sound/otonojyunnbann.014.png",
];
const level3 = [
  "sound/otonojyunnbann.001.png",
  "sound/otonojyunnbann.002.png",
  "sound/otonojyunnbann.003.png",
  "sound/otonojyunnbann.004.png",
  "sound/otonojyunnbann.005.png",
  "sound/otonojyunnbann.006.png",
  "sound/otonojyunnbann.007.png", 
  "sound/otonojyunnbann.008.png",
  "sound/otonojyunnbann.009.png",
  "sound/otonojyunnbann.010.png",
  "sound/otonojyunnbann.011.png",
  "sound/otonojyunnbann.012.png",
  "sound/otonojyunnbann.013.png",
  "sound/otonojyunnbann.014.png",
];
const level4 = [
    "sound/otonojyunnbann.015.png",
    "sound/otonojyunnbann.016.png",
    "sound/otonojyunnbann.017.png",
    "sound/otonojyunnbann.018.png",
    "sound/otonojyunnbann.019.png",
    "sound/otonojyunnbann.020.png",
    "sound/otonojyunnbann.021.png",
]
const level5 = [
    "sound/otonojyunnbann.022.png",
    "sound/otonojyunnbann.023.png",
    "sound/otonojyunnbann.024.png",
    "sound/otonojyunnbann.025.png",
    "sound/otonojyunnbann.026.png",
    "sound/otonojyunnbann.027.png",
    "sound/otonojyunnbann.028.png",
]
const level6 = [
    "sound/otonojyunnbann.015.png",
    "sound/otonojyunnbann.016.png",
    "sound/otonojyunnbann.017.png",
    "sound/otonojyunnbann.018.png",
    "sound/otonojyunnbann.019.png",
    "sound/otonojyunnbann.020.png",
    "sound/otonojyunnbann.021.png",
    "sound/otonojyunnbann.022.png",
    "sound/otonojyunnbann.023.png",
    "sound/otonojyunnbann.024.png",
    "sound/otonojyunnbann.025.png",
    "sound/otonojyunnbann.026.png",
    "sound/otonojyunnbann.027.png",
    "sound/otonojyunnbann.028.png",
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