<template>
  <div class="test2">
    <div>test2:{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Test2Component',
  setup () {
    const message = 'Test2Component hello!!'
    return {
      message
    }
  }
}
</script>

<style lang="scss" scoped>
.test2 {
  color: #0f0;
}
</style>
