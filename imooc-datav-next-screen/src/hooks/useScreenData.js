import { ref, onMounted, onUnmounted } from 'vue'
import { screenDataRequest } from '../api'

const countryCategoryMockData = ['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']
const indexCategoryMockData = ['订单量', '销售额', '用户数', '退单量']
const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

export function useScreenData () {
  const todayUser = ref(0)
  const growthLastDay = ref(0)
  const growthLastMonth = ref(0)
  const ageData = ref([])
  const averageAge = ref(0)
  const deviceData = ref({})
  const genderData = ref([])
  const riderData = ref({})
  const hotCategoryData = ref({})
  const headerData = ref({})
  const countryCategoryData = ref(countryCategoryMockData)
  const indexCategoryData = ref(indexCategoryMockData)
  const salesListData = ref([])
  const realTimeOrderData = ref({ date: [], data: [] })
  const salesRankData = ref([])

  let task
  // 获取核心指标
  const getKeyValues = ({ key, index }) => {
    const data = headerData.value
    if (data && data[key]) {
      return +data[key][index].endVal
    } else {
      return 0
    }
  }
  // 获取当前时间
  const getNowTime = () => {
    const now = new Date()
    const hour = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    return `${hour}:${minutes}:${seconds}`
  }

  const fetchScreenData = async () => {
    const data = await screenDataRequest()
    console.log(data)
    const {
      userToday, userGrowthLastDay, userGrowthLastMonth, age, devices, totalDevices, gender, rider, category,
      salesToday, orderToday, orderUser, covertRate, returnRate, realTimeOrder, areaSales, areaTop
    } = data
    // 用户总数数据
    todayUser.value = Number(userToday) || 0
    growthLastDay.value = Number(userGrowthLastDay) || 0
    growthLastMonth.value = Number(userGrowthLastMonth) || 0
    // 年龄分布数据
    const _ageData = []
    age.forEach((item, index) => {
      if (ageData.value[index]) {
        _ageData.push({
          startValue: ageData.value[index].value,
          value: item.value,
          axis: item.key,
          color: color[index]
        })
      } else {
        _ageData.push({
          startValue: 0,
          value: item.value,
          axis: item.key,
          color: color[index]
        })
      }
    })
    ageData.value = _ageData
    averageAge.value = +data.averageAge || 0
    // 登录设备数据
    // const total = devices.reduce((prev, cur) => prev + cur.value, 0)
    // console.log(total)
    const _deviceData = {
      totalDevices,
      devices
    }
    deviceData.value = _deviceData
    // 性别用户数据
    genderData.value = gender
    // 外卖骑手数据
    riderData.value = rider
    // 当前热卖数据
    hotCategoryData.value = category
    // 核心指标数据
    const _headerData = {
      headerData: [{
        title: '今日销售额',
        subTitle: 'Today\'s Sales Amount',
        startVal: getKeyValues({ key: 'headerData', index: 0 }),
        endVal: salesToday,
        img: 'https://www.youbaobao.xyz/datav-res/money.png'
      }, {
        title: '今日订单量',
        subTitle: 'Today\'s Total Orders',
        startVal: getKeyValues({ key: 'headerData', index: 1 }),
        endVal: orderToday,
        img: 'https://www.youbaobao.xyz/datav-res/order.png'
      }, {
        title: '今日交易用户数',
        subTitle: 'Today\'s Payed Users',
        startVal: getKeyValues({ key: 'headerData', index: 2 }),
        endVal: orderUser,
        img: 'https://www.youbaobao.xyz/datav-res/member.png'
      }, {
        title: '今日新增用户数',
        subTitle: 'Today\'s New Users',
        startVal: getKeyValues({ key: 'headerData', index: 3 }),
        endVal: userToday,
        img: 'https://www.youbaobao.xyz/datav-res/follow.png'
      }],
      project: [{
        title: '转化率',
        value: `${covertRate}%`,
        img: 'https://www.youbaobao.xyz/datav-res/success.png'
      }, {
        title: '退单率',
        value: `${returnRate}%`,
        img: 'https://www.youbaobao.xyz/datav-res/failed.png'
      }]
    }
    headerData.value = _headerData
    // 实时订单数据
    realTimeOrderData.value = {
      date: [...realTimeOrderData.value.date, getNowTime()],
      data: [...realTimeOrderData.value.data, realTimeOrder]
    }
    // 区域销售大盘环比分析
    salesListData.value = areaSales
    // 地区商家销售排行
    salesRankData.value = areaTop
  }

  onMounted(() => {
    fetchScreenData()
    task = setInterval(() => {
      fetchScreenData()
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
    realTimeOrderData,
    salesRankData
  }
}
