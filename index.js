/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const progressBar = document.querySelector('.progress-bar');

function setProgress(value) {
    value = Math.max(0, Math.min(100, value));

    progressBar.style.setProperty('--progress', value + '%');

    progressBar.setAttribute('data-text', `Loading... ${value}%`);
}
let progress = 0;

const interval = setInterval(() => {
    progress += 5;
    setProgress(progress);

    if (progress >= 100) {
        clearInterval(interval);
        progressBar.setAttribute('data-text', 'Done ✅');
    }
}, 300);