import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datavComponent from 'imooc-datav-libs-dev'

// yarn build 打包
// app.js 10.07 KiB (3个组件全部引入)
// app.js 9.92 KiB (1个组件引入) -- 未按需加载
// app.js 7.89 KiB (1个组件引入) -- 按需加载

createApp(App)
  .use(router)
  .use(store)
  .use(datavComponent)
  .mount('#app')
