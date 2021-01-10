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
          <div class="left3">
            <total-device :data="deviceData" />
          </div>
          <div class="left4">
            <total-gender :data="genderData" />
          </div>
          <div class="left5">
            <total-rider :data="riderData" />
          </div>
          <div class="left6">
            <hot-category :data="hotCategoryData" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData" />
          </div>
          <div class="right-top2">
            <transform-category :data="countryCategoryData"/>
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <order-map />
              </div>
              <div class="right-left2">
                <transform-category
                  :data="indexCategoryData"
                  :color="['rgb(178,209,126)', 'rgb(116,166,49)']"
                />
              </div>
              <div class="right-left3">CCC</div>
              <div class="right-left4">DDD</div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sales-list :data="salesListData"/>
              </div>
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
import AverageAge from '@/components/AverageAge/index1.0'
import TotalDevice from '@/components/TotalDevice'
import TotalGender from '@/components/TotalGender'
import TotalRider from '@/components/TotalRider'
import HotCategory from '@/components/HotCategory'
import CenterHeader from '@/components/CenterHeader'
import TransformCategory from '@/components/TransformCategory'
import SalesList from '@/components/SalesList'
import OrderMap from '@/components/OrderMap'

export default {
  name: 'Home',
  components: {
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    TransformCategory,
    SalesList,
    OrderMap
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
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: #3c3d40;

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }

        & > div {
          margin-bottom: 20px;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;

        .right-top1 {
          width: 100%;
          height: 206px;
          margin-bottom: 20px;
        }

        .right-top2 {
          width: 100%;
          height: 48px;
          margin-bottom: 20px;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
            }

            .right-left2 {
              height: 60px;
              margin-top: 20px;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;
              background: paleturquoise;
            }

            .right-left4 {
              height: 220px;
              margin-top: 10px;
              background: orangered;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
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
