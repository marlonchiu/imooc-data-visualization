<template>
  <div class="home">
    <imooc-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </imooc-loading>
    <imooc-container :options="{ width: 3840, height: 2160 }">
      <div class="test">123456789</div>
    </imooc-container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'Home',
  setup () {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        // loading.value = false
      }, 2000)
    })
    return {
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #1d1d1d;
  color: #fff;
  font-size: 48px;
}
.loading-text {
  margin-top: 10px;
  font-size: 20px;
}
</style>
