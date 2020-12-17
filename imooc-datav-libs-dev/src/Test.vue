<template>
  <div class="test">
    <div>message:{{ message }}</div>
    <div>doubleCount:{{ doubleCount }}</div>
    <button @click="updateCount">更新 Count</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'TestComponent',
  setup () {
    const message = 'hello world'
    const count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    const updateCount = () => {
      count.value++
    }
    return {
      message,
      doubleCount,
      updateCount
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  color: #f00;
}
</style>
