const fs = require('fs');
const path = require('path');

let alias = {
    'react-native': 'react-native-web',
    '@': path.join(__dirname, '../src')
};
// 获取所有文件夹  设置别名
let dirList = fs.readdirSync(path.join(__dirname, '../src'));

dirList.forEach(function (item) {
    // 判断是否为文件夹
    let isDir = fs.lstatSync(path.join(__dirname, '../src/' + item)).isDirectory();
    if (isDir) {
        alias[`_${item}`] = path.join(__dirname, '../src/' + item);
    }
});

module.exports = {
    resolve: {
        alias: alias
    }
};
