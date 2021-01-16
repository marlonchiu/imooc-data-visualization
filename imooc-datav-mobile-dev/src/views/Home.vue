<template>
  <div v-if="!loading" class="home">
    <div class="datav-wrapper"></div>
    <top-header />
    <sales-bar />
    <sales-line />
    <sales-pie />
    <sales-map />
    <sales-sun />
    <sales-radar />
  </div>
  <div v-else class="home">
    <div class="loading-wrapper">{{ loadingText }}</div>
  </div>
</template>

<script>
import { screenMobileRequest } from '../api'
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
    return {
      loading: true,
      loadingText: '加载中.',
      mobileData: null
    }
  },
  mounted() {
    this.task && clearInterval(this.task)
    this.task = setInterval(() => {
      if (this.loadingText === '加载中...') {
        this.loadingText = '加载中.'
      } else {
        this.loadingText += '.'
      }
    }, 500)
    this.loading = true
    screenMobileRequest().then(response => {
      console.log(response)
      this.loading = false
      this.task && clearInterval(this.task)
      this.$nextTick(() => {
        this.mobileData = response
      })
    })
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

  .loading-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #ffffff;
  }
}
</style>
