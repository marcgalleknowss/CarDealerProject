document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 100);
});

function setup() {
    let size = min(windowWidth, windowHeight) * 0.96;
    size = floor(size);
    createCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    mouseY = height / 2;
    noFill();
}

function windowResized() {
    let size = min(windowWidth, windowHeight) * 0.96;
    size = floor(size);
    resizeCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    draw();
}

function setup() {
    let size = min(windowWidth, windowHeight) * 0.96;
    size = floor(size);
    createCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    mouseY = height / 2;
    noFill();
}

function windowResized() {
    let size = min(windowWidth, windowHeight) * 0.96;
    size = floor(size);
    resizeCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    draw();
}