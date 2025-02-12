function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;

        const startLeft = getRandomArbitrary(0, screenWidth);
        const timeRun = getRandomArbitrary(2000, 8000);
        const opacityR = 1.0;
        const sizeR = getRandomArbitrary(5, 20);
        const endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);

        const heart = document.createElement("span");
        heart.innerHTML = "❤️"; // Using an emoji instead of FontAwesome
        heart.style.position = "absolute";
        heart.style.zIndex = "1000";
        heart.style.color = "#ff0000";
        heart.style.display = "block";
        heart.style.top = "0px";
        heart.style.left = `${startLeft}px`;
        heart.style.opacity = opacityR.toString();
        heart.style.fontSize = `${sizeR}px`;
        heart.style.transition = `top ${timeRun}ms linear, left ${timeRun}ms linear, opacity ${timeRun}ms linear`;

        document.body.appendChild(heart);

        requestAnimationFrame(() => {
            heart.style.top = `${screenHeight - sizeR}px`;
            heart.style.left = `${endLeft}px`;
            heart.style.opacity = "0";
        });

        setTimeout(() => {
            heart.remove();
        }, timeRun);
    }, 500);
});

console.log("Heart rain script loaded. ")