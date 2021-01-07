<template>
  <div class="time-line" style="width: 100%; height:100%">
    <vue-next-echarts :options="options" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'Timeline',
  setup () {
    const options = ref({})

    const update = () => {
      options.value = {
        baseOption: {
          timeline: {
            axisType: 'category',
            // 播放按钮的样式
            controlStyle: {
              position: 'left'
            },
            // 控制播放
            autoPlay: true,
            // 播放速度 默认2000 单位ms
            playInterval: 1000,
            // 表示是否循环播放
            loop: true,
            // 是否反向放置 timeline，反向则首位颠倒过来
            inverse: false,
            // 表示是否反向播放 (需要 loop: true)
            rewind: false,
            // 启动播放的位置 表示当前选中项是哪项。比如，currentIndex 为 0 时，表示当前选中项为 timeline.data[0]（即使用 options[0]）
            currentIndex: 2,
            // 拖动圆点的时候，是否实时更新视图
            realtime: true,
            // timeline 趋势数据
            data: [
              {
                value: '2002-01-01',
                symbol: 'diamond',
                symbolSize: 18
              },
              '2003-01-01',
              '2004-01-01',
              {
                value: '2005-01-01',
                tooltip: {
                  formatter: '{b} GDP达到一个高度'
                },
                symbol: 'diamond',
                symbolSize: 18
              },
              '2006-01-01',
              '2007-01-01',
              '2008-01-01',
              '2009-01-01',
              {
                value: '2010-01-01',
                symbol: 'roundRect',
                symbolSize: 18
              }
            ],
            label: {
              formatter: function (v) {
                return (new Date(v)).getFullYear()
              }
            }
          }
        },
        options: []
      }
    }

    onMounted(() => {
      update()
    })

    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.time-line {

}
</style>
