//Ref :https://qiita.com/riversun/items/d27f6d3ab7aaa119deab
const path = require("path");

module.exports = {
    mode: 'development',

    entry: {app: './src/index.js'},
    output: {
        path: path.join(__dirname, "./"),
        filename: '[name].js', //バンドルのファイル名。[name]の部分にはentryで指定したキーが入る
    },
    devtool: 'inline-source-map',//ブラウザでのデバッグ用にソースマップを出力する


    //webpack-dev-server用設定
    devServer: {
        open: false,//true:ブラウザを自動で開く
        openPage: "index.html",//自動で指定したページを開く
        contentBase: path.join(__dirname, './'),// HTML等コンテンツのルートディレクトリ
        watchContentBase: true,
        port: 4000, // ポート番号
    }
};