<template>
  <div class="average-age">
    <div class="title-wrapper">
      <div class="left">
        <div class="title">慕课外卖用户年龄分布&平均年龄</div>
        <div class="sub-title">Distribution of Age</div>
      </div>
      <div class="right">
        <div class="age">
          <count-to
            :startVal="startAge"
            :endVal="avgAge"
            :duration="1000"
            :decimals="2"
          />
          <span class="age-unit">岁</span>
        </div>
      </div>
    </div>
    <div id="average-age-chart">
      <vue-next-echarts :options="options"/>
    </div>
    <div class="average-data-wrapper">
      <div class="average-data" v-for="(item, index) in data" :key="index">
        <div class="average-data-value">
          <count-to
            :startVal="item.startValue"
            :endVal="item.value"
            :duration="1000"
          />
        </div>
        <div class="average-data-axis">
          <div class="point" :style="{background: item.color}" />
          <div class="text">{{item.axis}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'AverageAge',
  props: {
    avgAge: Number,
    data: Array
  },
  setup (props) {
    const startAge = ref(0)
    const options = ref({})
    const updateChart = () => {
      const data = ['年龄分布']
      const colors = []
      const axis = ['指标']
      let max = 0

      props.data.forEach(item => {
        data.push(item.value)
        max += item.value
        colors.push(item.color)
        axis.push(item.axis)
      })

      const newOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            fontSize: 28
          },
          padding: 10
        },
        color: colors,
        grid: {
          left: 40,
          right: 40,
          top: 0
        },
        dataset: {
          source: [
            axis,
            data
          ]
        },
        xAxis: {
          type: 'value',
          splitLine: { show: false },
          max,
          axisLine: {
            lineStyle: {
              color: 'rgb(50,51,53)',
              width: 3
            }
          },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 18
          }
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 15
          },
          {
            type: 'bar',
            stack: 'total'
          },
          {
            type: 'bar',
            stack: 'total'
          },
          {
            type: 'bar',
            stack: 'total'
          }
        ]
      }

      options.value = newOptions
    }

    watch(() => props.avgAge, (nextValue, preValue) => {
      startAge.value = preValue
    })

    watch(() => props.data, (nextValue, preValue) => {
      updateChart()
    })

    onMounted(() => {
      updateChart()
    })

    return {
      startAge,
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.average-age {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
  padding: 20px 40px;
  box-sizing: border-box;

  .title-wrapper {
    display: flex;
    align-items: center;

    .left {
      .title {
        font-size: 32px;
      }

      .sub-title {
        font-size: 16px;
        margin-top: 10px;
      }
    }

    .right {
      flex: 1;
      margin-left: 40px;
      font-weight: bold;

      .age {
        font-size: 68px;
        font-family: DIN;

        .age-unit {
          font-size: 20px;
        }
      }
    }
  }

  #average-age-chart {
    height: 120px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .average-data-axis {
        display: flex;
        align-items: center;
        justify-content: center;
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
</style>
