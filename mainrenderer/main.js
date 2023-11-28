console.log("from main.js");
// console.log('main process working');

const electron = require('electron');
const app = electron.app;
const browserwindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win1, win2;
function CreateWindow(){
    win1 = new browserwindow();
    win2 = new browserwindow();
    win1.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }));

    win2.loadURL(url.format({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }));
    win1.webContents.openDevTools();
    win2.webContents.openDevTools();
    win1.on('closed', () =>{
        win1 = null;
    })

    win2.on('closed', () =>{
        win2 = null;
    })
}

app.on('ready', CreateWindow);
