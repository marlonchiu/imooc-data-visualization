<template>
  <div class="test3">
    <div>test3:{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Test3Component',
  setup () {
    const message = 'Test3Component hello !!!'
    return {
      message
    }
  }
}
</script>

<style lang="scss" scoped> 
.test3 {
  color: #00F;
}
</style>
