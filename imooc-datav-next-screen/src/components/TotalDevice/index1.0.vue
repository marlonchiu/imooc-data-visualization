<template>
  <div class="total-device">
    <div class="total-device-left">
      <div id="total-device-chart" />
    </div>
    <div class="total-device-right">
      <div class="title-wrapper">
        <div class="total-device-right-left">
          <div class="title">慕课外卖登录设备</div>
          <div class="sub-title">Distribution of Internet devices</div>
        </div>
        <div class="total-device-right-right">
          <div class="age">
            <count-to
              :startVal="startTotal"
              :endVal="data.totalDevices"
              :duration="1000"
            />
            <span class="age-unit">台</span>
          </div>
        </div>
      </div>
      <div class="average-data-wrapper">
        <div class="average-data" v-for="(item, index) in devices" :key="index">
          <div class="average-data-value">
            <count-to
              :startVal="item.startValue"
              :endVal="item.value"
              :duration="1000"
            />
          </div>
          <div class="average-data-axis">
            <div class="point" :style="{ background: item.color }" />
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import * as Echarts from 'echarts'

const color = ['rgb(176,207,120)', 'rgb(157,195,91)', 'rgb(131,167,72)']

export default {
  name: 'totalDevice',
  props: {
    data: Object
  },
  setup (props) {
    const startTotal = ref(0)
    const devices = ref([])
    let chart

    const updateChart = () => {
      function createOption () {
        return {
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            selectedMode: 'multiple',
            selectedOffset: 10,
            clockwise: true,
            center: ['50%', '50%'],
            color,
            emphasis: {
              itemStyle: {
                color: 'rgb(140,251,182)'
              }
            },
            data: devices.value,
            roseType: 'radius',
            label: { show: false }
          }]
        }
      }

      if (!chart) {
        chart = Echarts.init(document.getElementById('total-device-chart'))
      }
      chart.setOption(createOption(), true)
    }

    const formatData = (newData) => {
      const _devices = newData.map((item, index) => ({
        startValue: devices.value[index]?.value || 0,
        value: item.value,
        name: item.key,
        color: color[index]
      }))
      devices.value = _devices
      updateChart()
    }

    watch(() => props.data, (nextValue, preValue) => {
      startTotal.value = preValue.totalDevices
      formatData(nextValue.devices)
    })

    onMounted(() => {
      startTotal.value = props.data.totalDevices
      formatData(props.data.devices)
    })

    return {
      startTotal,
      devices
    }
  }
}
</script>

<style lang="scss" scoped>
.total-device {
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);

  .total-device-left {
    width: 30%;
    height: 100%;

    #total-device-chart {
      width: 100%;
      height: 100%;
    }
  }

  .total-device-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 10px 40px 0;

    .title-wrapper {
      display: flex;
      align-items: center;

      .total-device-right-left {
        .title {
          font-size: 32px;
        }

        .sub-title {
          font-size: 16px;
          margin-top: 10px;
        }
      }

      .total-device-right-right {
        flex: 1;
        margin-left: 40px;
        font-weight: bold;

        .age {
          font-size: 56px;
          font-family: DIN;

          .age-unit {
            font-size: 20px;
          }
        }
      }
    }

    .average-data-wrapper {
      display: flex;

      .average-data {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bolder;

        .average-data-value {
          width: 100%;
        }

        .average-data-axis {
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 5px;

          .point {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }

          .text {
            margin-left: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
