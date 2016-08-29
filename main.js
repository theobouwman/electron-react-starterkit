const {app, BrowserWindow} = require('electron')
const {ipcMain} = require('electron')

let win

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1200,
        minWidth: 1200,
        height: 600,
        minHeight: 600
    })

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/index.html`)

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null
    })
}

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = 'pong'
})

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
    app.quit()
}
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
    createWindow()
}
})