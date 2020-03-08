const { app, BrowserWindow } = require('electron')

function createWindow() {

    for (var i = 1; i <= 10; i++) {
        showWin(i);
    }
}

function showWin(i) {
    let win = new BrowserWindow({ width: 800, height: 900, x: (50 + 2 * i), title: "开始" + i })
    
    // 然后加载应用的 index.html。  url 及本地文件形式   要根据自己要显示的index.html地址来写
    win.loadURL('http://zxxy-elearning.examok.com');

    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })

    let randomTime = setInterval(()=>{
        triger(win);
        
    }, 6000)

    
    setTimeout(() => {
        clearInterval(randomTime);
        win.close();
        app.exit();	
    }, 300 * 1000);


    // 打开开发者工具
    // win.webContents.openDevTools()

}
   


function triger(win){
    let radom = parseInt(Math.random() * (6+1),10);
    let array_one = ['http://zxxy-elearning.examok.com/home!courses.do?groupId=656', 
    'http://zxxy-elearning.examok.com/home!courses.do?groupId=658',
    'http://zxxy-elearning.examok.com/home!teachers.do?roleId=10',
    'http://zxxy-elearning.examok.com/home!knowledges.do',
    'http://zxxy-elearning.examok.com/home!newscast.do',
    'http://zxxy-elearning.examok.com/home!courses.do?groupId=660',
    'http://zxxy-elearning.examok.com/home!courses.do?groupId=668'
    ]
    let one_1 = array_one[radom];
    if(one_1){
        win.loadURL(one_1);
    }
   
}

app.whenReady().then(createWindow)