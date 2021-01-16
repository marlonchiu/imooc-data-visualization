<template>
  <div class="sales-radar">
    <div class="sales-radar-inner">
      <vue-echarts :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesRadar',
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    // 渲染echarts雷达图
    this.options = {
      tooltip: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '订单量', max: 6500 },
          { name: '骑手量', max: 16000 },
          { name: '访问量', max: 30000 },
          { name: '客服', max: 38000 },
          { name: '配送', max: 52000 },
          { name: '热度', max: 25000 }
        ]
      },
      series: [{
        name: '运营指标',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预期'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际'
          }
        ]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-radar {
  position: absolute;
  top: 3250px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 800px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-radar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .05);
  }
}
</style>
