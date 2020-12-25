<template>
<div class="test" style="width: 500px; height:400px">
  <base-scroll-list
    :config="config"
  />
</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Test',
  setup () {
    const config = reactive({
      headerData: [],
      headerStyle: [],
      headerBg: 'rgb(90, 90, 90)',
      headerHeight: 40,
      headerIndex: true
    })
    config.headerData = ['姓名', '年龄', '月薪']
    config.headerStyle = [{ color: '#f00' }]

    return {
      config
    }
  }
}
</script>

<style scoped>

</style>
