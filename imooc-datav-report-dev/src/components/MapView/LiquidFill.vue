<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
/* eslint-disable */
function getColor(value) {
  return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)'
      : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
}
export default {
  name: 'LiquidFill',
  data () {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [{
          title: 'rate',
          percent: 0.38
        }]
      },
      chartSettings: {}
    }
  },
  mounted () {
    this.chartSettings = {
      wave: [0.5, 0.3, 0.1],
        seriesMap: {
        rate: {
          radius: '80%',
            label: {
            formatter: (v) => {
              return `${(v.data.value * 100).toFixed(2)}%`
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
            color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
