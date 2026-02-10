const watch = document.querySelector('.watch');
function updateWatch() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    watch.textContent = `${hours}:${minutes}:${seconds}`;
    
}
updateWatch();
setInterval(updateWatch, 1000);