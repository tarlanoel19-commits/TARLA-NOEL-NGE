// Main Electron process for the Simple Task App.
// This file creates the Windows desktop window and loads index.html.

const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 820,
    minWidth: 380,
    minHeight: 620,
    title: "Simple Task App",
    backgroundColor: "#0f172a",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Load the same beginner-friendly HTML/CSS/JS task app inside Electron.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Keep links safe: open any external link in the user's browser, not inside the app.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  app.setAppUserModelId("com.tarlanoel.simpletaskapp");
  createWindow();

  // macOS behavior is harmless on Windows and keeps the app standard cross-platform.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// On Windows and Linux, close the app when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
