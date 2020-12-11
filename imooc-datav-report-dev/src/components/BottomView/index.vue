<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">111,103</div>
                <v-chart :options="searchUserOption"/>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">206,674</div>
                <v-chart :options="searchUserOption"/>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :current-page="currentPage"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
          </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small" @change="onCategoryChange">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      tableData: [
        { rank: 1, keyword: '北京', count: 6570, users: 4536 },
        { rank: 2, keyword: '上海', count: 1330, users: 172 },
        { rank: 3, keyword: '广州', count: 3508, users: 2304 },
        { rank: 4, keyword: '深圳', count: 1512, users: 780 }
      ],
      totalData: [],
      currentPage: 1,
      total: 100,
      pageSize: 4,
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  mounted () {
    this.renderPieChart()
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
    },
    onCategoryChange() {
    //
    },
    renderPieChart() {
      const colors = ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc']
      const mockData = [
        { legendname: '粉面粥店', value: 61, percent: '15.40', itemStyle: { color: colors[0] }, name: '粉面粥店 | 15.40%' },
        { legendname: '简餐便当', value: 58, percent: '15.40', itemStyle: { color: colors[1] }, name: '简餐便当 | 15.40%' },
        { legendname: '汉堡披萨', value: 29, percent: '17.40', itemStyle: { color: colors[2] }, name: '汉堡披萨 | 15.40%' },
        { legendname: '香锅冒菜', value: 47, percent: '15.40', itemStyle: { color: colors[3] }, name: '香锅冒菜 | 15.40%' },
        { legendname: '小吃炸串', value: 45, percent: '26.40', itemStyle: { color: colors[4] }, name: '小吃炸串 | 15.40%' },
        { legendname: '地方菜系', value: 8, percent: '15.40', itemStyle: { color: colors[5] }, name: '地方菜系 | 15.40%' }
      ]
      console.log(mockData)
      this.categoryOptions = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          top: 20,
          left: 20
        }, {
          text: '累计订单量',
          subtext: '320',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          x: '34.5%',
          y: '42.5%',
          textAlign: 'center'
        }],
        series: [{
          name: '品类分布',
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (params) {
                return params.data.legendname
              }
            }
          },
          radius: ['45%', '60%'],
          center: ['35%', '50%'],
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          // 逆时针排序
          clockwise: false,
          itemStyle: {
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const str = params.seriesName + '<br />' +
              params.marker + params.data.legendname + '<br />' +
              '数量：' + params.data.value + '<br />' +
              '占比：' + params.data.percent + '%'
            return str
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;

      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner{
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
