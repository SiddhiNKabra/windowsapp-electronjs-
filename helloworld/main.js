const electron = require('electron');
const app = electron.app;
const browserwindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;
function CreateWindow(){
    win = new browserwindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on('closed', () =>{
        win = null;
    })
}

app.on('ready', CreateWindow);
