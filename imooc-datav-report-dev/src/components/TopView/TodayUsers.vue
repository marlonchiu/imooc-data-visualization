<template>
  <div class="today-users">
    <common-card
      title="今日交易用户数"
      :value="orderUser"
    >
      <template>
        <vue-charts :options="getOptions()"/>
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">{{ returnRate }}</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions () {
      return {
        tooltip: {},
        xAxis: {
          show: false,
          type: 'category',
          data: this.orderUserTrendAxis
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
        color: ['#3398DB'],
        series: [{
          name: '用户实时交易量',
          type: 'bar',
          data: this.orderUserTrend,
          barWidth: '60%'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
