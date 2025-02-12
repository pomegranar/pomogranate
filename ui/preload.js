const { contextBridge, ipcRenderer } = require("electron");
// const path = require("node:path");

console.log("Preload script loaded");

contextBridge.exposeInMainWorld('electron', {
	// Expose platform information
	platform: process.platform,
	// Window control methods
	minimizeWindow: () => ipcRenderer.invoke('minimizeWindow'),
	maximizeWindow: () => ipcRenderer.invoke('maximizeWindow'),
	closeWindow: () => ipcRenderer.invoke('closeWindow'),
	// 	navigating to another page
	navigateToPage: () => ipcRenderer.send('navigate-to-page'),
});