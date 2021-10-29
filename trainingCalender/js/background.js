const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const calenderWrap = document.querySelector(".calender-wrap");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(bgImage);

bgImage.src = `img/${chosenImage}`;

calenderWrap.appendChild(bgImage);
