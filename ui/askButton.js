document.getElementById('agree').addEventListener('click', () => {
    window.electron.navigateToPage();
});

document.getElementById('nah').addEventListener('click', () => {
    window.electron.navigateToPage();
});

console.log("askButton.js loaded. ")

