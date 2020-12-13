module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '慕课网数据可视化 - 数据报表'
        return args
      })
  },
  // 服务项配置
  devServer: {
    host: 'localhost',
    port: 8088,
    https: false,
    open: true,
    proxy: {
      '/screen': {
        target: 'https://book.youbaobao.xyz:18082/screen',
        // 是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据
        changeOrigin: true,
        // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true,
        pathRewrite: {
          '^/screen': ''
        }
      }
    }
  }
}
