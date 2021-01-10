<template>
  <div class="order-map">
    <div class="loading" v-if="loading">加载中...</div>
    <vue-next-echarts v-else :options="options"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default {
  name: 'OrderMap',
  setup () {
    const loading = ref(true)
    const options = ref({})

    const update = () => {
      fetch('http://www.youbaobao.xyz/datav-res/datav/map.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          echarts.registerMap('china', data)
          const cities = ['北京', '上海', '广州', '南京', '苏州', '杭州']

          options.value = {
            timeline: {
              data: cities,
              axisType: 'category',
              autoPlay: true,
              playInterval: 3000,
              left: '10%',
              right: '5%',
              bottom: '3%',
              width: '80%',
              symbolSize: 10,
              lineStyle: {
                color: '#555'
              },
              checkpointStyle: {
                color: '#c03733',
                borderColor: '#777',
                borderWidth: 2
              },
              controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                color: '#666',
                borderColor: '#666'
              },
              progress: {
                lineStyle: {
                  color: '#555'
                },
                itemStyle: {
                  color: '#fff'
                }
              },
              label: {
                color: '#ddd'
              },
              emphasis: {
                label: {
                  color: '#fff'
                },
                controlStyle: {
                  color: '#aaa',
                  borderColor: '#aaa'
                }
              }
            },
            baseOption: {
              geo: [{
                map: 'china',
                zoom: 1.1,
                roam: true,
                scaleLimit: {
                  min: 0.5,
                  max: 3
                },
                center: [113.83531246, 34.0267395887],
                itemStyle: {
                  borderColor: 'rgba(147, 235, 248, 1)',
                  borderWidth: 1,
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(128, 217, 248, 1)',
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
                },
                emphasis: {
                  // label: {
                  //   show: false
                  // },
                  itemStyle: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                  }
                }
              }]
            }
          }

          loading.value = false
        })
    }

    onMounted(update)
    return {
      loading,
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.order-map {
  width: 100%;
  height: 100%;
  background: rgb(48, 48, 48);

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 36px;
    background: rgb(48, 48, 48);
  }
}
</style>
