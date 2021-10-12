// JavaScritptを圧縮するプラグイン
const TerserPlugin = require("terser-webpack-plugin");
// 共通設定

const Path = require("path");
const Webpack = require("webpack");

module.exports = {
  // モード
  mode: "production",
  // mode: 'development',
  // devtool: "eval-cheap-module-source-map",//for development
  // エントリーポイント
  entry: "./src/js/main.js",
  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: Path.resolve(__dirname, "./public/assets/js"),
    // 出力するファイル名
    filename: "main.js",
    //出力前にpath内を削除する
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  // 最適化
  optimization: {
    minimizer: [
      // JavaScritpt を圧縮する
      new TerserPlugin({
        // ライブラリのライセンスコメントなどを抽出した「xxx.LICENSE.txt」のようなファイルが出力されないようにする
        extractComments: false,
        // terser のオプション
        // 詳細は https://github.com/terser/terser#minify-options を参照
        terserOptions: {
          // console を削除する
          // compress: {
          //   drop_console: true,
          // },
        },
      }),
    ],
  },
  plugins: [
     // webpack.ProvidePluginを使用すると、指定した変数名でライブラリを使用できるようになる。以下の設定だと$, jQueryをimportしなくても利用できる。（GSAP系も同様
    new Webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
    }),
    new Webpack.ProvidePlugin({
      gsap: "gsap",
    }),
    new Webpack.ProvidePlugin({
      ScrollTrigger: "gsap/ScrollTrigger",
    }),
  ],
  // performance: {
  //   maxAssetSize: 100000,
  // },
};
