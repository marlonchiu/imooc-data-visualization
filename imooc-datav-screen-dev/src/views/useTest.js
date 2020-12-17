import { ref, watch, computed, onMounted, getCurrentInstance } from 'vue'

export default function useTest () {
  const count = ref(0)

  function increment () {
    count.value++
  }

  watch(() => count, () => {
    console.log('watch count', count.value)
  })

  onMounted(() => {
    console.log('onMounted')
  })
  const { ctx } = getCurrentInstance()
  console.log(console.log(ctx.$router.currentRoute.value))

  const gotoAbout = () => {
    ctx.$router.push('/about')
  }

  const doubleCount = computed(() => count.value * 2)

  // 加载store
  const number = computed(() => ctx.$store.state.number)
  console.log('ctx.$store: ', ctx.$store.state)
  const updateNumber = () => {
    // ctx.$store.commit('SET_NUMBER', count.value * 100)
    ctx.$store.dispatch('updateNumber', count.value * 100)
  }

  const aa = computed(() => ctx.$store.getters.aaValue)
  const bb = computed(() => ctx.$store.state.b.bb)
  const updateAA = () => {
    // ctx.$store.commit('SET_AA', ctx.$store.state.a.aa + 1)
    ctx.$store.commit('SET_AA', ctx.$store.getters.aaValue + 1)
  }
  const updateBB = () => {
    ctx.$store.commit('SET_BB', ctx.$store.state.b.bb + 2)
  }

  return {
    count,
    increment,
    doubleCount,
    gotoAbout,
    number,
    updateNumber,
    aa,
    bb,
    updateAA,
    updateBB
  }
}
