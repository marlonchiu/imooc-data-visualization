<template>
  <div class="sales-pie">
    <div class="sales-pie-inner">
      <div class="pie-item">
        <div class="pie-item-inner">
          <vue-echarts :options="options1" />
        </div>
      </div>
      <div class="pie-item">
        <div class="pie-item-inner">
          <vue-echarts :options="options2" />
        </div>
      </div>
      <div class="pie-item">
        <div class="pie-item-inner">
          <vue-echarts :options="options3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesPie',
  data () {
    return {
      options1: {},
      options2: {},
      options3: {}
    }
  },
  mounted () {
    function createOptions (title, value, values) {
      return {
        title: [{
          text: title,
          textStyle: {
            color: 'rgba(255,255,255,.3)',
            fontSize: 12
          },
          top: 3
        }, {
          text: value,
          textStyle: {
            color: 'rgba(255,255,255)',
            fontSize: 16,
            fontWeight: 500
          },
          top: '43%',
          left: '32%'
        }],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: title,
            type: 'pie',
            radius: ['65%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: values[0],
                name: '数据',
                itemStyle: {
                  color: 'rgb(0, 140, 217)'
                }
              },
              {
                value: values[1],
                name: '数据',
                itemStyle: {
                  color: 'rgb(35, 69, 145)'
                }
              }
            ]
          }
        ]
      }
    }
    this.options1 = createOptions('转化率', '13%', [870, 130])
    this.options2 = createOptions('退单率', '5%', [950, 50])
    this.options3 = createOptions('跳失率', '43%', [570, 430])
  }
}
</script>

<style lang="scss" scoped>
.sales-pie {
  position: absolute;
  top: 1450px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 400px;
  padding: 25px 12.5px 0;
  box-sizing: border-box;

  .sales-pie-inner {
    display: flex;
    width: 100%;
    height: 100%;

    .pie-item {
      flex: 0 0 33.33%;
      width: 33.33%;
      height: 100%;
      padding: 0 12.5px;
      box-sizing: border-box;

      .pie-item-inner {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
}
</style>
