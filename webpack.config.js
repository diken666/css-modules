const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// 插入一个插件的实例对象
const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filenameL: 'index.html' // 生成的内存中的首页名称
});


module.exports = {
    mode: 'production',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:3]']
            }]
    }
};