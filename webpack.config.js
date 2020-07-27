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
            presets: ['@babel/preset-env'],
            plugins: [[
              // 处理 jsx 语法 插件
              '@babel/plugin-transform-react-jsx',
              // 不加这一行 默认 用 React.createElement
              { pragma: 'ToyReact.createElement' }
            ]]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
};