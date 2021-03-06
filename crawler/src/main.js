const { app, BrowserWindow } = require('electron');
const windowsPath = 'src/views/main.html';

let win;

function createWindow() {
  win = new BrowserWindow({
    width:1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    }
  });

  win.loadFile(windowsPath);

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
