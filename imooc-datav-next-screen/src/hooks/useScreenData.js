import { ref, onMounted, onUnmounted } from 'vue'

/* eslint-disable-next-line */
const ageMockData = [{ "startValue": 0, "value": 131107, "axis": "0-20", "color": "rgb(116,166,49)" }, { "startValue": 0, "value": 330831, "axis": "20-30", "color": "rgb(190,245,99)" }, { "startValue": 0, "value": 551238, "axis": "30-50", "color": "rgb(202,252,137)" }, { "startValue": 0, "value": 31088, "axis": ">50", "color": "rgb(251,253,142)" }]

const random = val => Math.floor(Math.random() * val)

export function useScreenData () {
  const todayUser = ref(10000)
  const growthLastDay = ref(14)
  const growthLastMonth = ref(26)
  const ageData = ref(ageMockData)
  const averageAge = ref(0)

  let task

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + random(100)
      growthLastDay.value = growthLastDay.value + Math.random()
      growthLastMonth.value = growthLastMonth.value + Math.random()
      averageAge.value = averageAge.value + Math.random()

      const _ageData = [...ageData.value]
      _ageData.forEach(item => {
        item.startValue = item.value
        item.value = item.value + random(1000)
      })
      ageData.value = _ageData
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
    averageAge
  }
}
