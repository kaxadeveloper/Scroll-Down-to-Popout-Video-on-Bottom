const container = document.querySelector('.container');
const video = document.querySelector('.video');
let VideoHeight = video.offsetHeight;
let popOut = true;
container.style.height = VideoHeight + 'px';
window.addEventListener('scroll', function () {
    if (window.scrollY > VideoHeight) {
        if (popOut) {
            video.classList.add('popOut-bottom');
            video.style.bottom = -VideoHeight + 'px';
        }
    } else {
        video.classList.remove('popOut-bottom');
        video.style.bottom = "0px";
    }
})