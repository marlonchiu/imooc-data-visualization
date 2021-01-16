<template>
  <div class="home">
    <h1>echarts 扩展集成</h1>
    <ul>
      <li><router-link to="/liquidfill">水球图</router-link></li>
      <li><router-link to="/wordcloud">词云</router-link></li>
      <li><router-link to="/bmap">标准百度地图</router-link></li>
      <li><router-link to="/bmapcoolfly">百度飞线图</router-link></li>
      <li><router-link to="/bmapecharts">Echarts 百度地图</router-link></li>
      <li><router-link to="/bmapfly">百度地图 航线图</router-link></li>
      <li><router-link to="/bmapshape">百度地图 - 3D建筑</router-link></li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
