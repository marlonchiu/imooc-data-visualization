module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '慕课网数据可视化 - 数据大屏'
        return args
      })
  },
  // 服务项配置
  devServer: {
    host: 'localhost',
    port: 9099,
    https: false,
    open: true
  }
}
