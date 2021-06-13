const imgContainer = document.querySelector("#img-container");
console.log(imgContainer);
const imgUrl = [
    {
        src: "../static/coderstoday/images/work/anandcolddrinks.svg",
        alt: "Coders Today",
    }
];
imgUrl.forEach((element) => {
    let imgHtml = `
    <div class="column is-3">
        <img
            class="container-img"
            src="${element.src}"
            alt="${element.alt}"
        />
        <div class="caption">Product Booking App</div>
    </div>
    `;
    imgContainer.insertAdjacentHTML("beforeend", imgHtml);
});
