const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    icon: __dirname + '/assets/icon.ico',
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
  });
  mainWindow.loadURL('https://openguessr.com/'); // Remplace par ton site.
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
