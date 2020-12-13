<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import { screenDataRequest, mapScatterRequest, wordcloudRequest } from '../api'
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data () {
    return {
      screenData: null,
      mapScatterData: null,
      wordCloudData: null
    }
  },
  provide() {
    return {
      getScreenData: this.getScreenData,
      getWordCloudData: this.getWordCloudData,
      getMapScatterData: this.getMapScatterData
    }
  },
  async mounted() {
    const screenData = await screenDataRequest()
    const mapScatterData = await mapScatterRequest()
    const wordCloudData = await wordcloudRequest()
    // console.log(screenData)
    // console.log(mapScatterData)
    // console.log(wordcloudData)
    this.screenData = screenData
    this.mapScatterData = mapScatterData
    this.wordCloudData = wordCloudData
  },
  methods: {
    getScreenData() {
      return this.screenData
    },
    getWordCloudData() {
      return this.wordCloudData
    },
    getMapScatterData() {
      return this.mapScatterData
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    // height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
