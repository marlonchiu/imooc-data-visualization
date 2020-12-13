// https://v-charts.js.org/#/start
// v-charts 按需引入
import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import VeMap from 'v-charts/lib/map.common'
import VeBmap from 'v-charts/lib/bmap.common'

Vue.component(VeLine.name, VeLine)
Vue.component(VeMap.name, VeMap)
Vue.component(VeBmap.name, VeBmap)

// 完全引入
// import Vue from 'vue'
// import VCharts from 'v-charts'
// import 'v-charts/lib/style.css'
//
// Vue.use(VCharts)
