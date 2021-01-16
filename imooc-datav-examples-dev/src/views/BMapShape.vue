<template>
  <div id="map_container" />
</template>

<script>
  export default {
    mounted () {
      // 初始化百度地图
      const initBMap = () => {
        var map = this.$initMap({
          tilt: 80,
          heading: -45.3,
          center: [106.540547, 29.564858],
          zoom: 17
        })
        return map
      }

      const initData = () => {
        return fetch('https://www.youbaobao.xyz/datav-res/examples/chongqing.json')
          .then(res => res.json())
          .then(res => {
            var polygons = []
            var len = res.length
            for (var i = 0; i < len; i++) {
              var line = res[i]
              var polygon = []
              var pt = [line[1] * 512, line[2] * 512]
              for (var j = 3; j < line.length; j += 2) {
                pt[0] += line[j] / 100 / 2
                pt[1] += line[j + 1] / 100 / 2
                polygon.push([pt[0], pt[1]])
              }
              polygons.push({
                geometry: {
                  type: 'Polygon',
                  coordinates: [polygon]
                },
                properties: {
                  height: line[0] / 2
                }
              })
            }
            return polygons
          })
      }

      const setData = (map, data) => {
        var view = new this.$mapvgl.View({ map })
        var shapeLayer = new this.$mapvgl.ShapeLayer({
          color: 'blue',
          opacity: 0.3,
          style: 'windowAnimation',
          riseTime: 2000,
          enablePicked: true,
          selectedIndex: -1,
          selectedColor: 'red',
          autoSelect: true,
          onClick: (e) => {
            console.log(e)
          }
        })
        view.addLayer(shapeLayer)
        shapeLayer.setData(data)
      }
      initData().then(data => {
        setData(initBMap(), data)
      })
    }
  }
</script>

<style lang="scss" scoped>
  #map_container {
    width: 100%;
    height: 100%;
  }
</style>
