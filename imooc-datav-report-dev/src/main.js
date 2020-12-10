import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'
import ECharts from 'echarts'
import VueCharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
