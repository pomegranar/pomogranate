console.log("Renderer script loaded");

// TODO: uncomment the following block in prod:
// if (process.platform === 'win32') {
//     document.body.classList.add('win32');
// }

// Window control button handlers
document.getElementById('minimize-btn').addEventListener('click', () => {
    window.electron.minimizeWindow().then(r => console.log(r));
});

document.getElementById('maximize-btn').addEventListener('click', () => {
    window.electron.maximizeWindow().then(r => console.log(r));
});

document.getElementById('close-btn').addEventListener('click', () => {
    window.electron.closeWindow().then(r => console.log(r));
});