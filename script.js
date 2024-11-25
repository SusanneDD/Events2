const colorChanger = document.getElementById("colorChanger");
const elementCreator = document.getElementById("elementCreator");
const toggleText = document.getElementById("toggleText");
const hideButton = document.getElementById("hideButton");
const displayButton = document.getElementById("displayButton");


let clickCounters = { hotpink: 0, skyblue: 0, orange: 0 };


function updateCounter(color) {
    clickCounters[color]++;
    document.getElementById(`${color}Counter`).textContent =
        `${color.charAt(0).toUpperCase() + color.slice(1)}: ${clickCounters[color]}`;
    document.body.style.backgroundColor = color;
}


function createNewElement(elementType) {
    const newElement = document.createElement(elementType);
    newElement.innerText = `This is a new ${elementType} element.`;
    document.body.appendChild(newElement);
}


colorChanger.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const color = event.target.dataset.color;
        updateCounter(color);
    }
});


elementCreator.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        createNewElement(event.target.textContent);
    }
});

hideButton.addEventListener("click", () => {
    toggleText.style.display = "none";
});

displayButton.addEventListener("click", () => {
    toggleText.style.display = "block";
});

