<template>
<!--  <div class="bmap">-->
    <v-chart :options="options"/>
<!--  </div>-->
</template>

<script>
import 'echarts/extension/bmap/bmap'
const testPoint = [{
  name: '海门',
  value: [121.15, 31.89, 80]
}, {
  name: '南京',
  value: [118.78, 32.04, 100]
}]
const testPoint2 = [{
  name: '北京',
  value: [116.403694, 39.916485, 260]
}, {
  name: '上海',
  value: [121.47824, 31.23667, 190]
}]
export default {
  name: 'BMap',
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    /* eslint-disable */
    this.options = {
      title: {
        text: '慕课外卖销售数据大盘',
        subtext: '销售趋势统计',
        sublink: 'http://www.youbaobao.xyz/datav-docs/guide/guide/echarts-map.html',
        left: 'center'
      },
      bmap: {
        key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyle: {
          styleJson: [{
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'land',
            'elementType': 'all',
            'stylers': {
              'color': '#f3f3f3'
            }
          }, {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'color': '#fdfdfd'
            }
          }, {
            'featureType': 'highway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'geometry',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'green',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'subway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'manmade',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'local',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'building',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'label',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#999999'
            }
          }]
        }
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: testPoint,
          // 对应数据值
          encode: {
            value: 2
          },
          symbolSize: function(val) {
            return val[2] / 10
          },
          itemStyle: {
            color: 'purple'
          },
          label: {
            show: false,
            formatter: '{b}',
            position: 'right'
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 2',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: testPoint2,
          encode: {
            value: 2
          },
          symbolSize: function(val) {
            return val[2] / 10
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          },
          label: {
            show: false,
            formatter: '{b}',
            position: 'right'
          },
          emphasis: {
            label: {
              show: true
            }
          },
          hoverAnimation: true,
          // 波纹
          rippleEffect: {
            brushType: 'stroke'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .bmap {
    width: 100%;
    height: 100%;
  }
</style>
