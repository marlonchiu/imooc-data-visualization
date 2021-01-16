import Vue from 'vue'
// import * as echarts from 'echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/sunburst'
import 'echarts/lib/chart/radar'

import VueECharts from 'vue-echarts'

import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

// Vue.prototype.$echarts = echarts

Vue.component('vue-echarts', VueECharts)
Vue.prototype.$bmap = window.BMapGL
Vue.prototype.$initMap = window.initMap
Vue.prototype.$mapvgl = window.mapvgl
Vue.prototype.$mapv = window.mapv
Vue.prototype.$purpleStyle = window.purpleStyle
Vue.prototype.$darkStyle = window.darkStyle
