<template>
  <div>
    <button @click="increment">{{ count }}</button>
    doubleCount: {{ doubleCount }}
    <button @click="gotoAbout">goto About</button>
    <div>
      vuex number: {{ number }}
      <button @click="updateNumber">updateNumber</button>
    </div>
    <div>
      vuex a.aa: {{ aa }}
      vuex b.bb: {{ bb }}
      <button @click="updateAA">updateAA</button>
      <button @click="updateBB">updateBB</button>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import useTest from './useTest'
export default {
  setup () {
    // const { count, increment, doubleCount } = useTest()
    const router = useRouter()
    console.log('router: ', router)
    const route = useRoute()
    console.log('route: ', route)
    console.log('route: ', route.path)

    return useTest()

    // return {
    //   count,
    //   increment,
    //   doubleCount
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
