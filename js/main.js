const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const a = document.querySelector("a");
const handleClick = () => {
    nav.classList.toggle('navigation--active');
    hamburger.classList.toggle('hamburger--active');
}
hamburger.addEventListener('click', handleClick);
//Heading text
const h1 = document.querySelector(".h1");
const txt = "dach-went"
let indexHeading = 0;
const timeHeading = 350;

const addHeading = () => {
    h1.textContent += txt[indexHeading];
    indexHeading++;
    if (indexHeading === txt.length) clearInterval(indexTyping)
};
const indexTyping = setInterval(addHeading,timeHeading);
//Heading cursor
const cursor = document.querySelector(".cursor");
const timeCursor = 500;
const cursorAnimation = () => {
    cursor.classList.toggle("cursor--active");
}
setInterval(cursorAnimation, timeCursor);

const scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000
});
//Lightbox
lightbox.option({
    'albumLabel': "%1 z %2"
})
//Slider
const config = {
    type: "carousel",
    autoplay: 3500,
    animationDuration: 1000
}
new Glide('.glide', config).mount()
//Scroll animation

window.addEventListener("scroll",() => {
    const aboutUs = document.querySelector(".section__about-us_text");
    const aboutUsPosition = aboutUs.getBoundingClientRect().top;
    const aboutUsScreen = window.innerHeight;
    if (aboutUsPosition < aboutUsScreen) {
        aboutUs.classList.add("section__about-us_active");
    }
});




