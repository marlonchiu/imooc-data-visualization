import Vue from 'vue'
import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.prototype.$echarts = ECharts
Vue.component('vue-echarts', VueECharts)
Vue.prototype.$bmap = window.BMapGL
Vue.prototype.$initMap = window.initMap
Vue.prototype.$mapvgl = window.mapvgl
Vue.prototype.$mapv = window.mapv
Vue.prototype.$purpleStyle = window.purpleStyle
Vue.prototype.$darkStyle = window.darkStyle
