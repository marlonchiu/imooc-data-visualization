<template>
  <div class="total-users">
    <common-card
      title="累计用户数"
      value="1,957,707"
    >
      <template>
        <v-chart :options="getOptions()"/>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">95.74%</span>
          <div class="increase" />
          <span class="month">月同比</span>
          <span class="emphasis">144.68%</span>
          <div class="decrease" />
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
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
            type: 'bar',
            stack: '总量',
            data: [100],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '总量',
            data: [250],
            itemStyle: {
              color: '#eeeeee'
            }
          },
          {
            type: 'custom',
            stack: '总量',
            data: [100],
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
      }
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
