module.exports = {
  presets: [
      // プリセットを指定することで、ES2020 を ES5 に変換
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // or 2
      },
    ],
  ],
};
