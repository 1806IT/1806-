//自己写的都在注释里面
var keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    'length': 3
}
var hash = {
    q: 'qq.com',
    w: 'weibo.com',
    e: 'ele.me',
    r: 'reren.cn',
    t: 'tianya.cn',
    y: 'youtube.com',
    b: 'baidu.com'
}
newhash = JSON.parse(localStorage.getItem('newwebsite') || 'null')
newhash ? console.log('有了') : console.log('空的')
if (newhash) {
    hash = newhash
}
//

for (var i = 0; i < keys.length; i++) {
    var div1 = document.createElement('div')
    div1.className = 'keybord';
    div1.id = 'dv' + i;
    maindv.appendChild(div1)
    var row = keys[i]
    for (var j = 0; j < keys[i].length; j++) {
        var kbd1 = document.createElement('kbd')
        //kbd1.id = row[j] 教程是id加在了button上
        //kbd1.innerText = row[j]
        kbd1.textContent = row[j]
        kbd1.className = 'keybd'
        var editor = document.createElement('button')
        var imgIco = document.createElement('img')
        //下载ico
        下载ico(imgIco,hash[row[j]])           
        }
        editor.textContent = 'E'
        editor.id = row[j]
        editor.onclick = function (press) {
            var button = press.target
            var newIco = button.previousSibling //忘记了
            var key = press.target.id//忘记这个语句结构了
            var x = prompt('给我一个网址')//存用户输入的新网址，也忘记了……
            hash[key] = x          
            newIco.src = 'https://www.' + x + '/favicon.ico'
            newIco.onerror = function (xx) {//监听下载失败，忘记了
                xx.target.src = './ico.jpg'
            }
            localStorage.setItem('newwebsite', JSON.stringify(hash))
            //将改变后的hash存入浏览器中的localStorage
        }
        kbd1.appendChild(imgIco)
        kbd1.appendChild(editor)
        div1.appendChild(kbd1)

    }
}
//监听用户点击函数
/*document.getElementById('q').onclick=function(){
    console.log(q)
}这是用鼠标点击案件图案，监听的是用户按键盘的事件，理解错误*/
document.onkeypress = function keymonitor(keyb) {
    console.log(keyb)//传入的参数是由键盘输入的，因为事件是onkeypress
    //var key=keyb.key
    var userin = keyb['key']
    website = hash[userin]
    window.open('https://www.' + website, '_blank')//这个语法结构又忘记了

}

//下载ico函数
function 下载ico(elementImg, ico) {
    if (hash[row[j]]) {
        elementImg.src = 'https://www.' + ico + '/favicon.ico'//这个忘记啦
    } else {
        elementImg.src = './ico.jpg'
    }
    elementImg.onerror = function (xx) {//监听下载失败，忘记了
        console.log('下载失败')
        xx.target.src = './ico.jpg'
    }