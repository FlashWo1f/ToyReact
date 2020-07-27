module.exports = {
  entry: {
    main: './main.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          // js 转化为 低版本兼容
          loader: 'babel-loader',
          options: {
            // presets
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
};