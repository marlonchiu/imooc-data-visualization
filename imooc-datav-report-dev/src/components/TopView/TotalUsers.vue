<template>
  <div class="total-users">
    <common-card
      title="累计用户数"
      :value="userToday"
    >
      <template>
        <vue-charts :options="getOptions()"/>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{ userGrowthLastDay }}</span>
          <div class="increase" />
          <span class="month">月同比</span>
          <span class="emphasis">{{ userGrowthLastMonth }}</span>
          <div class="decrease" />
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions () {
      return this.userTodayNumber > 0 ? {
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        // color: ['#3398DB'],
        series: [
          {
            name: '上月平台用户数',
            type: 'bar',
            stack: '总量',
            data: [this.userLastMonth],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '今日平台用户数',
            type: 'bar',
            stack: '总量',
            data: [this.userTodayNumber],
            itemStyle: {
              color: '#eeeeee'
            }
          },
          {
            type: 'custom',
            stack: '总量',
            data: [this.userLastMonth],
            renderItem: function (params, api) {
              // console.log(params, api)
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              return {
                type: 'group',
                position: endPoint,
                children: [{
                  type: 'path',
                  shape: {
                    d: 'M525.873548 133.450323l-383.174193 761.723871 763.045161 1.981935L525.873548 133.450323z',
                    x: -5,
                    y: 5,
                    width: 10,
                    height: 10
                  },
                  style: {
                    fill: '#45c946'
                  },
                  layout: 'cover'
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M512.2 881l384-665H128.3z',
                    x: -5,
                    y: -15,
                    width: 10,
                    height: 10
                  },
                  style: {
                    fill: '#45c946'
                  },
                  layout: 'cover'
                }
                ]
              }
            }
          }
        ]
      } : null
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;

  .month {
    margin-left: 10px;
  }
}
</style>
<!--上三角-->
<!--<svg t="1607351333301" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1468" width="200" height="200"><path d="M525.873548 133.450323l-383.174193 761.723871 763.045161 1.981935L525.873548 133.450323z" p-id="1469"></path></svg>-->
<!--下三角-->
<!--<svg t="1607351399629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604" width="200" height="200"><path d="M512.2 881l384-665H128.3z" p-id="1605"></path></svg>-->
