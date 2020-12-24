<template>
  <div class="center-header">
    <div class="center-header-wrapper">
      <div
        class="center-header-item"
        v-for="(item, index) in headerData"
        :key="index"
      >
        <div class="center-header-left">
          <div class="bg">
            <div class="img">
              <icon :name="iconData[index]" />
            </div>
<!--            <div-->
<!--              class="img"-->
<!--              :style="{backgroundImage: `url('${item.img}')`}"-->
<!--            />-->
          </div>
        </div>
        <div class="center-header-right">
          <div class="title">{{item.title}}</div>
          <div class="sub-title">{{item.subTitle}}</div>
          <div class="total">
            <count-to
              :start-val="item.startVal"
              :end-val="item.endVal"
              :duration="1000"
              separator=","
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrapper">
      <div class="project" v-for="(item, index) in project" :key="index">
        <div class="project-img">
          <img :src="item.img">
        </div>
        <div class="project-text">{{item.title}}</div>
        <div class="project-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'centerHeader',
  props: {
    data: Object
  },
  setup (props) {
    const project = ref([])
    const headerData = ref([])
    const iconData = ref(['money', 'orders', 'vip-member', 'user'])
    const update = () => {
      project.value = [...props.data.project.value]
      headerData.value = [...props.data.headerData.value]
    }
    onMounted(() => {
      update()
    })
    watch(() => props.data, () => {
      update()
    })
    return {
      project,
      headerData,
      iconData
    }
  }
}
</script>

<style lang="scss" scoped>
.center-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(66, 68, 70);
  padding: 0 40px;
  box-sizing: border-box;

  .center-header-wrapper {
    display: flex;

    .center-header-item {
      flex: 1;
      display: flex;

      .center-header-left {
        .bg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 185px;
          height: 185px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-color: rgb(131, 167, 72);
          border-radius: 50%;

          .img {
            width: 60%;
            //height: 60%;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .center-header-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 40px;
        width: 410px;

        .title {
          font-size: 32px;
        }

        .sub-title {
          font-size: 16px;
          letter-spacing: 1px;
          margin-top: 10px;
        }

        .total {
          font-family: DIN;
          font-size: 56px;
          font-weight: bolder;
          letter-spacing: 2px;
          margin-top: 10px;
        }
      }
    }
  }

  .project-wrapper {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .project {
      display: flex;
      flex-direction: column;
      align-items: center;

      .project-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .project-text {
        font-size: 18px;
        margin-top: 10px;
      }

      .project-value {
        font-size: 28px;
        font-weight: 700;
        margin-top: 5px;
      }
    }
  }
}
</style>
