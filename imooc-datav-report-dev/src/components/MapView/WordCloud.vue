<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  name: 'WordCloud',
  mixins: [commonDataMixin],
  data () {
    return {
      chartData: {},
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
      }
    }
  },
  watch: {
    wordCloudData() {
      const data = []
      this.wordCloudData.forEach(item => {
        data.push({
          word: item.word,
          count: item.count
        })
      })
      this.chartData = {
        columns: ['word', 'count'],
        rows: data
      }
    }
  }
}
</script>

<style scoped>

</style>
