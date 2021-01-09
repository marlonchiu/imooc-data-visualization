<template>
  <div class="jiangsu-map-warning" style="width: 100%; height:100%">
    <vue-next-echarts :options="options"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default {
  name: 'JiangsuMapWarning',
  setup () {
    const options = ref({})

    const update = () => {
      fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          echarts.registerMap('jiangsu', data)
          const mapCenter = {}
          data.features.forEach(item => {
            // console.log(item.properties)
            const { name, center } = item.properties
            mapCenter[name] = center
          })
          console.log(mapCenter)
          options.value = {
            visualMap: {
              show: true,
              max: 100,
              seriesIndex: [0],
              inRange: {
                color: ['#a5dcf4', '#006edd'],
                symbolSize: [30, 100]
              }
            },
            geo: [{
              // 使用自定义地图
              map: 'jiangsu',
              // 地图默认显示级别
              zoom: 1,
              // 启动鼠标滚轮地图缩放
              roam: false,
              // 控制地图缩放比例
              scaleLimit: {
                min: 0,
                max: 3
              },
              itemStyle: {
                areaColor: '#013C62',
                shadowColor: '#013C62',
                shadowBlur: 20,
                shadowOffsetX: -5,
                shadowOffsetY: 15
              }
            }],
            series: [{
              type: 'map',
              map: 'jiangsu',
              zoom: 1,
              roam: false,
              label: {
                show: true,
                color: '#fff'
              },
              itemStyle: {
                borderColor: '#2980b9',
                borderWidth: 1,
                areaColor: '#12235c'
              },
              emphasis: {
                label: {
                  color: '#fff',
                  show: true
                },
                itemStyle: {
                  areaColor: '#fa8c16',
                  borderWidth: 0
                }
              },
              data: Object.keys(mapCenter).map(centerItem => {
                const value = Math.random() * 100 // 模拟人口数据
                console.log(centerItem, value)
                return {
                  name: centerItem,
                  value
                }
              })
            }]
          }
        })
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
