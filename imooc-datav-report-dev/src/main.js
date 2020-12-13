import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'
import ECharts from 'echarts'
import VueCharts from 'vue-echarts'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('vue-charts', VueCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
