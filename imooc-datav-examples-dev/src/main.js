import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('vue-echarts', VueECharts)

Vue.prototype.$bmap = window.BMapGL
Vue.prototype.$initMap = window.initMap
Vue.prototype.$mapvgl = window.mapvgl
Vue.prototype.$mapv = window.mapv
Vue.prototype.$purpleStyle = window.purpleStyle

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
