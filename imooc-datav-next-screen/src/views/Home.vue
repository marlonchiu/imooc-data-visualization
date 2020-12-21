<template>
  <div class="home">
    <imooc-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </imooc-loading>
    <imooc-container v-else :options="{ width: 3840, height: 2160 }">
      <div class="header">
        <top-header />
      </div>
      <div class="separator-wrapper">
        <div class="separator"></div>
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            />
          </div>
          <div class="left2">
            <average-age
              :data="ageData"
              :avg-age="averageAge"
            />
          </div>
          <div class="left3">555</div>
          <div class="left4">666</div>
          <div class="left5">777</div>
          <div class="left6">888</div>
        </div>
        <div class="right">
          <div class="right-top1">999</div>
          <div class="right-top2">000</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">AAA</div>
              <div class="right-left2">BBB</div>
              <div class="right-left3">CCC</div>
              <div class="right-left4">DDD</div>
            </div>
            <div class="right-right">
              <div class="right-right1">EEE</div>
              <div class="right-right2">FFF</div>
            </div>
          </div>
        </div>
      </div>
    </imooc-container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useScreenData } from '@/hooks/useScreenData.js'
import TopHeader from '@/components/TopHeader'
import TotalUser from '@/components/TotalUser'
import AverageAge from '@/components/AverageAge'

export default {
  name: 'Home',
  components: {
    TopHeader,
    TotalUser,
    AverageAge
  },
  setup () {
    const loading = ref(true)
    const screenData = useScreenData()

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 200)
    })

    return {
      loading,
      ...screenData
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

  #imooc-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
      width: 100%;
      margin-top: 10px;
      height: 167px;
    }

    .separator-wrapper {
      width: 100%;
      height: 10px;

      .separator {
        width: 100%;
        height: 10px;
        background: #5c5859;
        filter: blur(0);
        backdrop-filter: blur(0);
      }
    }

    .center {
      width: 100%;
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;

        .left1 {
          height: 300px;
          //background: #7a7a7a;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
          background: blueviolet;
        }

        .left4 {
          height: 230px;
          background: mediumpurple;
        }

        .left5 {
          height: 360px;
          background: pink;
        }

        .left6 {
          height: 320px;
          background: darkred;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: blue;

        .right-top1 {
          width: 100%;
          height: 206px;
          background: darkred;
        }

        .right-top2 {
          width: 100%;
          height: 48px;
          background: cadetblue;
        }

        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          /* background: deeppink; */

          .right-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;

            .right-left1 {
              height: 999px;
              background: red;
            }

            .right-left2 {
              height: 80px;
              background: deepskyblue;
            }

            .right-left3 {
              height: 350px;
              background: paleturquoise;
            }

            .right-left4 {
              height: 220px;
              background: orangered;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              background: burlywood;
            }

            .right-right2 {
              width: 100%;
              flex: 1;
              margin-top: 20px;
              background: palegreen;
            }
          }
        }
      }
    }
  }
}
.loading-text {
  margin-top: 10px;
  font-size: 20px;
}
</style>
