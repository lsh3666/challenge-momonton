
const body = document.querySelector("body");
const IMAGE_COUNT = 3;

function paintBackground(number) {
    const image = new Image();
    image.src = `images/${number + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom() {
    return Math.floor(Math.random() * IMAGE_COUNT);
}

function init() {
    const randomNumber =  getRandom();
    paintBackground(randomNumber);
}

init();