module.exports = {
  plugins: [
    require('css-declaration-sorter')({ order: 'concentric-css' }),
    require('autoprefixer')({ grid: true }),
    // require('css-mqpacker'),//非推奨なので↓に切り替え
    require('postcss-sort-media-queries')({sort:'mobile-first'})
  ],
}
