import { ref, onMounted, onUnmounted } from 'vue'

export function useScreenData () {
  const todayUser = ref(10000)
  const growthLastDay = ref(14.52)
  const growthLastMonth = ref(46.35)

  let task

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10
      growthLastDay.value++
      growthLastMonth.value++
    }, 1000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth
  }
}