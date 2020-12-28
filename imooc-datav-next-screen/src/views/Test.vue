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
      headerFontSize: 24,
      rowFontSize: 20,
      headerColor: '#fff',
      rowColor: '#000',
      rowStyle: [{ color: '#00f' }],
      rowBg: ['rgb(240, 240, 240)', 'rgb(255, 255, 255)'],
      aligns: ['center', 'center', 'right'],
      headerHeight: 40,
      headerIndex: true,
      rowsData: [],
      rowNum: 10
    })
    config.headerData = ['姓名', '年龄', '月薪']
    config.headerStyle = [{ color: '#f00' }, { width: '100px' }]
    for (let i = 0; i < 10; i++) {
      config.rowsData.push([
        '同学' + (i + 1),
        Math.floor(Math.random() * 10 + 20),
        Math.floor(Math.random() * 10000 + 10000)
      ])
    }
    return {
      config
    }
  }
}
</script>

<style scoped>

</style>
