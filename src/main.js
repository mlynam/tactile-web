
const {app} = require('electron');
const {bootstrap} = require('./bootstrap');

app.on('ready', bootstrap(app));
