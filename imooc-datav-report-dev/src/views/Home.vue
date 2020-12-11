<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import { screenDataRequest } from '../api'
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
  async mounted() {
    const screenData = await screenDataRequest()
    console.log(screenData)
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
