const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay, see you tomorrow!!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "pX";
    noBtn.style.top = randomY + "px";

});