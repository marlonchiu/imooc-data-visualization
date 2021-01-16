<template>
  <div class="home">
    <div class="datav-wrapper"></div>
    <top-header />
    <sales-bar />
    <sales-line />
    <sales-pie />
    <sales-map />
    <sales-sun />
    <sales-radar />
  </div>
</template>

<script>
import TopHeader from '../components/TopHeader'
import SalesBar from '../components/SalesBar'
import SalesLine from '../components/SalesLine'
import SalesPie from '../components/SalesPie'
import SalesMap from '../components/SalesMap'
import SalesSun from '../components/SalesSun'
import SalesRadar from '../components/SalesRadar'

export default {
  name: 'Home',
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;

  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 41.75rem;
    z-index: 1;
    /* background-image: url("//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/44b2ad11c37339db11f8ca5d59c5b31c.jpg"); */
    background-image: url("//www.youbaobao.xyz/datav-res/datav/datav-mobile-bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
