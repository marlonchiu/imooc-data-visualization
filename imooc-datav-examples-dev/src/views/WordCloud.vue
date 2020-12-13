<template>
  <div id="container"></div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  name: 'WordCloud',
  mounted () {
    const data = [{
      name: '慕课网',
      value: 100
    }, {
      name: '数据可视化',
      value: 50
    }, {
      name: 'Sam',
      value: 25
    }, {
      name: '慕课网1',
      value: 150
    }, {
      name: '数据可视化1',
      value: 75
    }, {
      name: 'Sam1',
      value: 55
    }]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data: data,
        shape: 'circle',
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
