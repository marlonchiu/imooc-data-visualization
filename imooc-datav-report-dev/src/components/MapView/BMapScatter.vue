<template>
  <ve-bmap
    height="100%"
    :settings="chartSettings"
    :series="chartSeries"
    :tooltip="tooltip"
    :title="title"
  />
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'

const convertData = function (data, geo) {
  const res = []
  data.forEach(item => {
    const { name, value } = item
    const geoCoord = geo[name]
    if (geoCoord) {
      res.push({
        name,
        value: [...geoCoord, value]
      })
    }
  })
  return res
}
/* eslint-disable */
export default {
  name: 'BMapScatter',
  mixins: [commonDataMixin],
  data () {
    return {
      title: {
        text: '慕课外卖销售数据大盘',
        subtext: '销售趋势统计',
        sublink: 'http://www.youbaobao.xyz/datav-docs/guide/guide/echarts-map.html',
        left: 'center'
      },
      chartSettings: {
        key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            'styleJson': [{
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
        }
      },
      tooltip: {},
      chartSeries: []
    }
  },
  methods: {
    renderBMapChart (data, geo) {
      this.chartSeries = [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData(data, geo),
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
          name: 'Top 10',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: convertData(data.sort(function(a, b) {
            return b.value - a.value
          }), geo).slice(0, 10),
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
  },
  watch: {
    mapScatterData(){
      const { data, geo } = this.mapScatterData
      this.renderBMapChart(data, geo)
    }
  }
}
</script>

<style scoped>

</style>
