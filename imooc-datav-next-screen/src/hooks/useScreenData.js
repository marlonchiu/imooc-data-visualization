import { ref, onMounted, onUnmounted } from 'vue'

/* eslint-disable-next-line */
const ageMockData = [{ "startValue": 0, "value": 131107, "axis": "0-20", "color": "rgb(116,166,49)" }, { "startValue": 0, "value": 330831, "axis": "20-30", "color": "rgb(190,245,99)" }, { "startValue": 0, "value": 551238, "axis": "30-50", "color": "rgb(202,252,137)" }, { "startValue": 0, "value": 31088, "axis": ">50", "color": "rgb(251,253,142)" }]
/* eslint-disable-next-line */
const deviceMockData = {"totalDevices":1070909,"devices":[{"key":"Android","value":423676},{"key":"iOS","value":373581},{"key":"PC","value":273652}]}
/* eslint-disable-next-line */
const genderMockData = [{"key":"male","value":1442542},{"key":"female","value":1442548}]
/* eslint-disable-next-line */
/* eslint-disable-next-line */
const riderMockData = {"axisX":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"orderData":{"legend1":"去年骑手月人均接单","legend2":"今年骑手月人均接单","data1":["330","420","560","450","610","890","720","610","580","750","770","600"],"data2":["430","510","660","550","710","990","620","550","760","810","930","720"]},"rateData":{"legend1":"去年月新增骑手","legend2":"今年月新增骑手","data1":["129","223","202","197","300","112","333","249","178","322","401","167"],"data2":["179","263","282","297","330","344","222","299","190","455","566","233"]}}
/* eslint-disable-next-line */
const hotCategoryMockData = {"data1":{"axisX":["粉面粥店","简餐便当","汉堡披萨","香锅冒菜","小吃炸串","地方菜系","轻食简餐"],"data1":[50,29,46,88,99,69,97],"data2":[50,71,54,12,1,31,3]},"data2":{"axisX":["草莓","甘蔗","榴莲","菠萝","香蕉","梨","苹果"],"data1":[85,4,3,26,63,31,19],"data2":[15,96,97,74,37,69,81]}}

const random = val => Math.floor(Math.random() * val)

export function useScreenData () {
  const todayUser = ref(10000)
  const growthLastDay = ref(14)
  const growthLastMonth = ref(26)
  const ageData = ref(ageMockData)
  const deviceData = ref(deviceMockData)
  const averageAge = ref(0)
  const genderData = ref(genderMockData)
  const riderData = ref(riderMockData)
  const hotCategoryData = ref(hotCategoryMockData)

  let task

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + random(100)
      growthLastDay.value = growthLastDay.value + Math.random()
      growthLastMonth.value = growthLastMonth.value + Math.random()
      averageAge.value = averageAge.value + Math.random()
      deviceData.value.totalDevices = deviceData.value.totalDevices + random(100)

      // 年龄数据
      const _ageData = [...ageData.value]
      _ageData.forEach(item => {
        item.startValue = item.value
        item.value = item.value + random(1000)
      })
      ageData.value = _ageData

      // 登录设备
      const _deviceData = { ...deviceData.value }
      _deviceData.totalDevices += random(100)
      _deviceData.devices.forEach(item => {
        item.value += random(1000)
      })
      deviceData.value = _deviceData

      // 性别用户
      const _genderData = [...genderData.value]
      _genderData.forEach(item => {
        item.value += random(1000)
      })
      genderData.value = _genderData

      // 外卖骑手
      const _riderData = { ...riderData.value }
      _riderData.orderData.data1.forEach(item => {
        item += random(100)
      })
      _riderData.orderData.data2.forEach(item => {
        item += random(100)
      })
      _riderData.rateData.data1.forEach(item => {
        item += random(100)
      })
      _riderData.rateData.data2.forEach(item => {
        item += random(100)
      })
      riderData.value = _riderData

      // 热门分类
      const _hotCategoryData = { ...hotCategoryData.value }
      _hotCategoryData.data1.data1.forEach(item => {
        item += random(10)
      })
      _hotCategoryData.data1.data2.forEach(item => {
        item += random(10)
      })
      _hotCategoryData.data2.data1.forEach(item => {
        item += random(10)
      })
      _hotCategoryData.data2.data2.forEach(item => {
        item += random(10)
      })
      hotCategoryData.value = _hotCategoryData
    }, 3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    deviceData,
    genderData,
    riderData,
    hotCategoryData
  }
}
