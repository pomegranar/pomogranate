const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

ipcMain.on('navigate-to-page', (event) => {
	const window = BrowserWindow.getFocusedWindow()
	window.loadFile(path.join(__dirname, "ui", "agreed.html"))
})

const createWindow = () => {
	const win = new BrowserWindow({
		width: 600,
		height: 600,
		frame: false,
		// titleBarStyle: process.platform === "darwin" ? "hiddenInset" : "hidden", // macOS-specific behavior
		webPreferences: {
			sandbox: false,
			preload: path.join(__dirname, "ui", "preload.js"),
			contextIsolation: true,
			// enableRemoteModule: false, // ✅ Prevents security risks
			nodeIntegration: false,
		},
	});


	ipcMain.handle('minimizeWindow', () => {
		const win = BrowserWindow.getFocusedWindow();
		if (win) win.minimize();
	});

	ipcMain.handle('maximizeWindow', () => {
		const win = BrowserWindow.getFocusedWindow();
		if (win) {
			if (win.isMaximized()) {
				win.unmaximize();
			} else {
				win.maximize();
			}
		}
	});

	ipcMain.handle('closeWindow', () => {
		const win = BrowserWindow.getFocusedWindow();
		if (win) win.close();
	});



	win.loadFile(path.resolve(__dirname, "ui", "index.html")).then(r => console.log(r));
};

app.whenReady().then(() => {
	createWindow();
});

// const { ipcMain, BrowserWindow } = require('electron');

