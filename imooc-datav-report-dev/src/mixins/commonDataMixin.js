function format(v) {
  // return (+v).toLocaleString() // 基础实现
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  // $& 表示当前匹配到到的数据
  return `${v}`.replace(reg, '$&,')
}

function wrapperObject(o, k) {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

function wrapperArray(o, k) {
  return o && o[k] ? o[k] : []
}

function wrapperMoney(o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}

function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0
}

function wrapperNumber(o, k) {
  return o && o[k] ? format(o[k]) : 0
}

function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}

export default {
  inject: ['getScreenData', 'getMapScatterData', 'getWordCloudData'],
  computed: {
    screenData () {
      return this.getScreenData()
    },
    mapScatterData () {
      return this.getMapScatterData()
    },
    wordCloudData () {
      return this.getWordCloudData()
    },
    // 累计销售额
    salesToday() {
      return wrapperMoney(this.screenData, 'salesToday')
    },
    salesLastDay() {
      return wrapperMoney(this.screenData, 'salesLastDay')
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.screenData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.screenData, 'salesGrowthLastMonth')
    },
    // 累计订单量
    orderToday() {
      return wrapperNumber(this.screenData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.screenData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.screenData, 'orderTrend')
    },
    // 今日交易用户数
    orderUser() {
      return wrapperNumber(this.screenData, 'orderUser')
    },
    returnRate() {
      return wrapperPercentage(this.screenData, 'returnRate')
    },
    orderUserTrend() {
      return wrapperArray(this.screenData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.screenData, 'orderUserTrendAxis')
    },
    // 累计用户数
    userToday() {
      return wrapperNumber(this.screenData, 'userToday')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.screenData, 'userToday')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.screenData, 'userLastMonth')
    },
    userGrowthLastDay() {
      return wrapperPercentage(this.screenData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperPercentage(this.screenData, 'userGrowthLastMonth')
    },
    userGrowthLastMonthNumber() {
      return wrapperNumber(this.screenData, 'userGrowthLastMonth')
    },
    // 销售额 和 访问量
    orderFullYear() {
      return wrapperArray(this.screenData, 'orderFullYear')
    },
    orderFullYearAxis() {
      return wrapperArray(this.screenData, 'orderFullYearAxis')
    },
    orderRank() {
      return wrapperArray(this.screenData, 'orderRank')
    },
    userFullYear() {
      return wrapperArray(this.screenData, 'userFullYear')
    },
    userFullYearAxis() {
      return wrapperArray(this.screenData, 'userFullYearAxis')
    },
    userRank() {
      return wrapperArray(this.screenData, 'userRank')
    },
    category1() {
      return wrapperObject(this.screenData, 'category.data1')
    },
    category2() {
      return wrapperObject(this.screenData, 'category.data2')
    }
  },
  filters: {
    format(v) {
      return format(v)
    }
  }
}
