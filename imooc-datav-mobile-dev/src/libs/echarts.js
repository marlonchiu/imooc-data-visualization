import Vue from 'vue'
import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.prototype.$echarts = ECharts
Vue.component('vue-echarts', VueECharts)
