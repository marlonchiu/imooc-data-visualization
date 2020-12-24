<template>
  <div class="transform-category">
    <div
      class="category"
      v-for="(item, index) in data" :key="item"
    >
      <div v-if="index === selected" class="selected" :style="{background: color[0]}">{{item}}</div>
      <div v-else>{{item}}</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  name: 'TransformCategory',
  props: {
    data: Array,
    color: {
      type: Array,
      default () {
        return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
      }
    }
  },
  setup (props) {
    const selected = ref(0)
    let task

    const trigger = () => {
      task && clearInterval(task)
      task = setInterval(() => {
        if (selected.value + 1 > props.data.length - 1) {
          selected.value = 0
        } else {
          selected.value++
        }
      }, 2000)
    }

    onMounted(trigger)
    onUnmounted(() => task && clearInterval(task))

    return {
      selected
    }
  }
}
</script>

<style lang="scss" scoped>
.transform-category {
  display: flex;
  width: 100%;
  height: 100%;

  .category {
    flex: 1;
    background: rgb(53, 57, 65);
    font-size: 24px;
    color: rgb(144, 160, 174);

    .hovered {
      background: rgb(80, 80, 80);
    }

    .selected {
      background: rgb(140, 160, 173);
      color: #fff;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
