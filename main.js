const { app, BrowserWindow, ipcMain } = require('electron')
const Store = require('electron-store');
const store = new Store();

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        // autoHideMenuBar: true,
        // titleBarStyle: "hidden"
        frame: false
    })

    win.loadFile('./client/index.html');

    ipcMain.on('miniview', (event, arg) => {
        win.setSize(325, 350);
    })
}

// Events
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})