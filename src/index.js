
const {BrowserWindow, app} = require('electron');
const path = require('path');
const url = require('url');

const windowSpec = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegrationInWorker: true,
  },
};

/**
 * Run the application
 */
function main() {
  let win = new BrowserWindow(windowSpec);
  win.on('closed', () => {
    win = null;
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));
}

app.on('ready', main);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
