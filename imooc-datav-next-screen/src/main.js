import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datavComponent from 'imooc-datav-libs-dev'
import VueCountTo from './components/VueCountTo/vue-countTo'

createApp(App)
  .use(store)
  .use(router)
  .use(datavComponent)
  .component('CountTo', VueCountTo)
  .mount('#app')
