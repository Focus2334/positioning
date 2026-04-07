const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');

const progressBar = document.querySelector('.progress-bar');

function setProgress(value) {
    value = Math.max(0, Math.min(100, value));
    progressBar.style.setProperty('--progress', value + '%');
}
let progress = 0;

const interval = setInterval(() => {
    progress += 5;
    setProgress(progress);

    if (progress >= 100) {
        clearInterval(interval);
    }
}, 300);
openBtn.onclick = () => modal.style.display = 'flex';
closeBtn.onclick = () => modal.style.display = 'none';
modal.onclick = (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
};
