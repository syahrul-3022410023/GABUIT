const bouquetButton = document.getElementById("bouquetButton");
const takeButton = document.getElementById("takeButton");
const messageBox = document.getElementById("messageBox");

let isPicked = false;

function takeBouquet(event) {
    if (isPicked) return;

    isPicked = true;
    bouquetButton.classList.add("is-picked");
    messageBox.classList.add("show");
    takeButton.textContent = "Buket Sudah Diambil";
    takeButton.disabled = true;

    const rect = bouquetButton.getBoundingClientRect();
    const x = event && event.clientX ? event.clientX : rect.left + rect.width / 2;
    const y = event && event.clientY ? event.clientY : rect.top + rect.height / 2;

    createPetals(x, y);
}

function createPetals(originX, originY) {
    const petals = ["\uD83C\uDF38", "\uD83D\uDC97", "\u2728", "\uD83C\uDF37", "\uD83D\uDC90"];

    for (let i = 0; i < 18; i++) {
        const petal = document.createElement("span");
        const angle = (Math.PI * 2 * i) / 18;
        const distance = 70 + Math.random() * 95;

        petal.className = "petal";
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = `${originX}px`;
        petal.style.top = `${originY}px`;
        petal.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        petal.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
        petal.style.setProperty("--r", `${Math.random() * 220 - 110}deg`);

        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 1300);
    }
}

bouquetButton.addEventListener("click", takeBouquet);
takeButton.addEventListener("click", takeBouquet);
