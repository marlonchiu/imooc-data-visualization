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
/* eslint-disable-next-line */
const headerMockData = {"headerData":{"value":[{"title":"今日销售额","subTitle":"Today's Sales Amount","startVal":40041113,"endVal":40105335,"img":"https://www.youbaobao.xyz/datav-res/money.png"},{"title":"今日订单量","subTitle":"Today's Total Orders","startVal":2566778,"endVal":2570025,"img":"https://www.youbaobao.xyz/datav-res/order.png"},{"title":"今日交易用户数","subTitle":"Today's Payed Users","startVal":271744,"endVal":272200,"img":"https://www.youbaobao.xyz/datav-res/member.png"},{"title":"今日新增用户数","subTitle":"Today's New Users","startVal":1286552,"endVal":1289057,"img":"https://www.youbaobao.xyz/datav-res/follow.png"}]},"project":{"value":[{"title":"转化率","value":"13.16%","img":"https://www.youbaobao.xyz/datav-res/success.png"},{"title":"退单率","value":"5.73%","img":"https://www.youbaobao.xyz/datav-res/failed.png"}]}}
const countryCategoryMockData = ['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']
const indexCategoryMockData = ['订单量', '销售额', '用户数', '退单量']
/* eslint-disable-next-line */
const salesListMockData = [{"order":"北京 -10%","shop":"北京 -19%","rider":"北京 -12%","newShop":"北京 -17%","avgOrder":"北京 -8%"},{"order":"上海 +19%","shop":"上海 -7%","rider":"上海 +6%","newShop":"上海 +7%","avgOrder":"上海 +21%"},{"order":"广州 -6%","shop":"广州 -5%","rider":"广州 +23%","newShop":"广州 -22%","avgOrder":"广州 +12%"},{"order":"深圳 -19%","shop":"深圳 -14%","rider":"深圳 -13%","newShop":"深圳 +7%","avgOrder":"深圳 -7%"},{"order":"南京 -22%","shop":"南京 -7%","rider":"南京 -7%","newShop":"南京 +16%","avgOrder":"南京 -8%"},{"order":"杭州 +15%","shop":"杭州 +9%","rider":"杭州 -10%","newShop":"杭州 -11%","avgOrder":"杭州 +7%"},{"order":"合肥 -8%","shop":"合肥 -5%","rider":"合肥 +9%","newShop":"合肥 -7%","avgOrder":"合肥 -12%"},{"order":"济南 +20%","shop":"济南 +8%","rider":"济南 +16%","newShop":"济南 +3%","avgOrder":"济南 -12%"},{"order":"太原 +8%","shop":"太原 -4%","rider":"太原 +5%","newShop":"太原 +10%","avgOrder":"太原 +25%"},{"order":"成都 -7%","shop":"成都 +19%","rider":"成都 -24%","newShop":"成都 +13%","avgOrder":"成都 -3%"},{"order":"重庆 +4%","shop":"重庆 -24%","rider":"重庆 +12%","newShop":"重庆 +9%","avgOrder":"重庆 +4%"},{"order":"苏州 +16%","shop":"苏州 -8%","rider":"苏州 +19%","newShop":"苏州 -17%","avgOrder":"苏州 -15%"},{"order":"无锡 +15%","shop":"无锡 +12%","rider":"无锡 +20%","newShop":"无锡 -13%","avgOrder":"无锡 -20%"},{"order":"常州 -18%","shop":"常州 -19%","rider":"常州 +15%","newShop":"常州 +5%","avgOrder":"常州 +8%"},{"order":"温州 -21%","shop":"温州 +20%","rider":"温州 +8%","newShop":"温州 -21%","avgOrder":"温州 +11%"},{"order":"哈尔滨 -19%","shop":"哈尔滨 -17%","rider":"哈尔滨 -9%","newShop":"哈尔滨 -23%","avgOrder":"哈尔滨 +18%"},{"order":"长春 -2%","shop":"长春 +18%","rider":"长春 -20%","newShop":"长春 -4%","avgOrder":"长春 -24%"},{"order":"大连 +22%","shop":"大连 -15%","rider":"大连 -6%","newShop":"大连 -16%","avgOrder":"大连 +9%"},{"order":"沈阳 -15%","shop":"沈阳 -8%","rider":"沈阳 -17%","newShop":"沈阳 +14%","avgOrder":"沈阳 -14%"},{"order":"拉萨 -4%","shop":"拉萨 -17%","rider":"拉萨 -17%","newShop":"拉萨 +19%","avgOrder":"拉萨 -21%"},{"order":"呼和浩特 -10%","shop":"呼和浩特 +15%","rider":"呼和浩特 +17%","newShop":"呼和浩特 +21%","avgOrder":"呼和浩特 +11%"},{"order":"武汉 +15%","shop":"武汉 -12%","rider":"武汉 +18%","newShop":"武汉 +15%","avgOrder":"武汉 -7%"},{"order":"南宁 -17%","shop":"南宁 -13%","rider":"南宁 -23%","newShop":"南宁 -13%","avgOrder":"南宁 -14%"}]
/* eslint-disable-next-line */
const realTimeOrderMockData = {"date":["12:25:13","12:25:17","12:25:22","12:25:27","12:25:32","12:25:37","12:25:42","12:25:47","12:25:52","12:25:57"],"data":[1143,769,251,733,335,969,869,1390,168,1391]}

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
  const headerData = ref(headerMockData)
  const countryCategoryData = ref(countryCategoryMockData)
  const indexCategoryData = ref(indexCategoryMockData)
  const salesListData = ref(salesListMockData)
  const realTimeOrderData = ref(realTimeOrderMockData)

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

      //  销售额和订单
      const _headerData = { ...headerData.value }
      _headerData.headerData.value.map(item => {
        item.startVal = item.endVal
        item.endVal += random(1000)
      })
      headerData.value = _headerData
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
    hotCategoryData,
    headerData,
    countryCategoryData,
    indexCategoryData,
    salesListData,
    realTimeOrderData
  }
}
