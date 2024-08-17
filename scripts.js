let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 10; // Increase by 10% each time
        updateProgressBar();
    }
}

function resetProgress() {
    progress = 0;
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    progressBar.style.width = progress + '%';
    progressText.innerText = 'Progress: ' + progress + '%';
}
