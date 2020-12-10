<template>
  <div class="total-orders">
    <common-card
      title="累计订单量"
      value="2,115,465"
    >
      <template>
        <v-chart :options="getOptions()"/>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">2,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        xAxis: {
          show: false,
          type: 'category',
          // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
