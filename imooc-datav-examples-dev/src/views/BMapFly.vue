<template>
  <div id="map_container" />
</template>

<script>
  export default {
    mounted () {
      const map = this.$initMap({
        tilt: 60,
        heading: 0,
        center: [103.438656, 25.753594],
        zoom: 6,
        style: this.$purpleStyle
      })
      const initData = () => {
        const data = []
        const citys = [
          '北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨', '长春',
          '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州', '武汉', '长沙', '广州',
          '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐', '成都', '贵阳', '昆明', '拉萨', '海口'
        ]
        let randomCount = 100 // 模拟的飞线的数量
        const curve = new this.$mapvgl.BezierCurve()
        // 构造数据
        while (randomCount--) {
          var startPoint = this.$mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)])
          var endPoint = this.$mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)])
          curve.setOptions({
            start: [startPoint.lng, startPoint.lat],
            end: [endPoint.lng, endPoint.lat]
          })
          const curveModelData = curve.getPoints()
          data.push({
            geometry: {
              type: 'LineString',
              coordinates: curveModelData
            },
            properties: {
              count: Math.random()
            }
          })
        }
        return data
      }
      const setData = (map, data) => {
        const view = new this.$mapvgl.View({ map })
        const flylineLayer = new this.$mapvgl.FlyLineLayer({
          style: 'chaos',
          step: 0.3,
          color: 'rgba(33, 242, 214, 0.3)',
          textureColor: function (data) {
            return data.properties.count > 0.5 ? '#ff0000' : '#56ccdd'
          },
          textureWidth: 20,
          textureLength: 10
        })
        view.addLayer(flylineLayer)
        flylineLayer.setData(data)
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
