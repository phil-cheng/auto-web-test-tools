// auth phil
const { app, BrowserWindow, ipcMain } = require('electron')

// 主进程中在global上自定义对象
global.saveDefault= {
    url_list: [],
    childFreshInterval: 6,
    wait_page: ""
}  

function createWindow() {
    let win = new BrowserWindow({ 
        width: 800, 
        height: 900, 
        webPreferences: {webSecurity: false}
    })
    // 然后加载应用的 index.html。  url 及本地文件形式   要根据自己要显示的index.html地址来写
    win.loadFile('index.html');
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })

    // 打开开发者工具
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow)


// 关闭事件
app.on('window-all-closed', function(){
    app.quit();
})