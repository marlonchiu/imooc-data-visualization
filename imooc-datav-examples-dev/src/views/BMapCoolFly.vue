<template>
  <div id="map_container" />
</template>

<script>
  export default {
    mounted () {
      const cityCenter = this.$mapv.utilCityCenter.getCenterByCityName('北京')
      const map = this.$initMap({
        tilt: 0,
        center: [cityCenter.lng, cityCenter.lat],
        zoom: 5,
        style: this.$purpleStyle
      })
      const initData = () => {
        var data = []
        var cities = ['北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨', '长春',
          '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州', '武汉', '长沙', '广州',
          '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐', '成都', '贵阳', '昆明', '拉萨', '海口']
        var targetCity = this.$mapv.utilCityCenter.getCenterByCityName('上海')
        var nodeData = [{
          x: targetCity.lng,
          y: targetCity.lat
        }]
        var edgeData = []
        var randomCount = 500

        for (var i = 0; i < randomCount; i++) {
          var startCity = this.$mapv.utilCityCenter.getCenterByCityName(cities[parseInt(cities.length * Math.random())])
          nodeData.push({
            x: startCity.lng - 5 + Math.random() * 10,
            y: startCity.lat - 5 + Math.random() * 10
          })
          edgeData.push({
            source: i + 1,
            target: 0
          })
        }
        console.log(nodeData, edgeData)
        var bundling = this.$mapv.utilForceEdgeBundling().nodes(nodeData).edges(edgeData)
        var results = bundling()
        console.log(results)
        for (var k = 0; k < results.length; k++) {
          var line = results[k]
          var coordinates = []
          for (var j = 0; j < line.length; j++) {
            coordinates.push([line[j].x, line[j].y])
          }
          data.push({
            geometry: {
              type: 'LineString',
              coordinates
            }
          })
        }
        console.log(data)
        return data
      }
      const setData = (map, data) => {
        // 1. 初始化图层
        var view = new this.$mapvgl.View({ map })
        // 2. 初始化 LineLayer
        var lineLayer = new this.$mapvgl.LineLayer({
          color: 'rgba(55, 50, 250, 0.3)',
          blend: 'lighter'
        })
        view.addLayer(lineLayer)
        lineLayer.setData(data)

        var linePointLayer = new this.$mapvgl.LinePointLayer({
          size: 8, // 点的大小
          speed: 12, // 点运动的速度
          color: 'rgba(255, 255, 0, 0.6)', // 点的颜色
          animationType: this.$mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH, // 点的动画类型
          shapeType: this.$mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE, // 点的形状
          blend: 'lighter' // 点交汇时处理方式
        })
        view.addLayer(linePointLayer)
        linePointLayer.setData(data)
      }
      const data = initData()
      setData(map, data)
    }
  }
</script>

<style lang="scss" scoped>
  #map_container {
    width: 100%;
    height: 100%;
  }
</style>
