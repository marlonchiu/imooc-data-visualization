<template>
  <div class="home">
    <imooc-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </imooc-loading>
    <imooc-container v-else :options="{ width: 3840, height: 2160 }">
      <div class="header">111</div>
      <div class="separator">222</div>
      <div class="center">
        <div class="left">
          <div class="left1">333</div>
          <div class="left2">444</div>
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
export default {
  name: 'Home',
  setup () {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 200)
    })
    return {
      loading
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
      height: 167px;
      background: yellow;
    }

    .separator {
      width: 100%;
      height: 10px;
      background: #000;
    }

    .center {
      width: 100%;
      flex: 1;
      display: flex;
      background: rebeccapurple;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        background: red;
        padding-bottom: 20px;
        box-sizing: border-box;

        .left1 {
          height: 300px;
          background: green;
        }

        .left2 {
          height: 320px;
          background: yellowgreen;
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
