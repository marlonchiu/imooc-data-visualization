<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
/* eslint-disable */

function getColor(value) {
  return value > 0 && value <= 50 ? 'rgba(97,216,0,.7)'
    : value > 50 && value <= 80 ? 'rgba(204,178,26,.7)'
      : value > 80 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
}
export default {
  name: 'LiquidFill',
  mixins: [commonDataMixin],
  data () {
    return {
      chartData: {},
      chartSettings: {}
    }
  },
  methods: {
    renderLiquidFillChart (chartData) {
      this.chartSettings = {
        // wave: [0.5, 0.3, 0.1],
        seriesMap: {
          用户月同比增长: {
            radius: '80%',
            label: {
              formatter: (v) => {
                return `${(v.data.value).toFixed(2)}%`
              },
              textStyle: {
                fontSize: 36,
                color: '#999',
                fontWeight: 'normal'
              },
              position: ['50%', '50%'],
              // 水纹重复时候的颜色
              insideColor: '#fff'
            },
            outline: {
              itemStyle: {
                borderColor: '#aaa4a4',
                borderWidth: 1,
                color: 'none',
                shadowBlur: 0,
                shadowColor: '#fff'
              },
              borderDistance: 0
            },
            backgroundStyle: {
              color: '#fff'
            },
            itemStyle: {
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            amplitude: 8,
            color: [getColor(chartData.rows[0].percent)]
          }
        }
      }
    }
  },
  watch: {
    userGrowthLastMonthNumber() {
      this.chartData = {
        columns: ['title', 'percent'],
        rows: [{
          title: '用户月同比增长',
          percent: this.userGrowthLastMonthNumber
        }]
      }
      this.renderLiquidFillChart(this.chartData)
    }
  }
}
</script>

<style scoped>

</style>
