function runAway() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    const btn = document.querySelector("button");
    let randomWidth = getRandomInt(10, windowWidth - 30);
    let randomHeight = getRandomInt(10, windowHeight - 50);

    console.log(randomWidth);
    console.log(randomHeight);

    btn.setAttribute("style", `top:${randomHeight}px; left:${randomWidth}px`);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}