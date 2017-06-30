
const {BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let windowSpec = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegrationInWorker: true,
  },
};

/**
 * Creates a new window.
 * @return {Electron.BrowserWindow} The created window.
 */
function createWindow() {
  const win = new BrowserWindow(windowSpec);
  win.loadURL(url.format({
    pathname: path.join(__dirname, `index.${process.env.NODE_ENV}.html`),
    protocol: 'file:',
    slashes: true,
  }));
  return win;
}

/**
 * Bootstrap the application
 * @param {Electron.App} app The electron application.
 * @return {function} The main app handler.
 */
const bootstrap = (app) => () => {
  let win = createWindow();
  win.on('closed', () => {
    win = null;
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
};

exports.bootstrap = bootstrap;
