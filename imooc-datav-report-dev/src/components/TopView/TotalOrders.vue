<template>
  <div class="total-orders">
    <common-card
      title="累计订单量"
      :value="orderToday"
    >
      <template>
        <vue-charts :options="getOptions()"/>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">{{ orderLastDay }}</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions () {
      return this.orderTrend.length > 0 ? {
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
          data: this.orderTrend,
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
      } : null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
