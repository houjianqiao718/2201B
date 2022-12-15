<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>
      <div class="echarts">
        <!-- 为Echarts折线图准备一个容器 -->
        <div id="main" style="width: 800px; height: 400px"></div>
        <!-- 为Echarts饼状图准备一个容器 -->
        <div id="box" style="width: 600px; height: 400px"></div>
      </div>
      <!-- 为Echarts柱状图准备一个容器 -->
      <div id="Histogram" style="width: 1200px; height: 400px"></div>
    </el-card>
  </div>
</template>

<script>
// 1.导入echarts
import * as echarts from "echarts"
import _ from "lodash"

export default {
  data() {
    return {
      // 需要合并的数据
      // 折线图
      options: {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#E9EEF3"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ]
      }
    }
  },
  // 此时,页面上的元素,已经被渲染完毕了
  mounted() {
    this.$nextTick(() => {
      this.showEchart()
      this.showEchart1()
      this.showEchart2()
    })
  },
  methods: {
    //折线图
    async showEchart() {
      // 3.基于准备好的dom，初始化echarts实例
      var chartDom = document.getElementById("main")
      var myChart = echarts.init(chartDom)
      const { data: res } = await this.$http.request("/reports/type/1")
      if (res.meta.status !== 200) return this.$message("获取折线图数据失败!")
      // 数据合并
      // console.log(res.data);
      const result = _.merge(res.data, this.options)
      // console.log(result);
      // 5.展示数据
      myChart.setOption(result)
      //自适应
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    /*饼状图*/
    showEchart1() {
      var chartDom = document.getElementById("box")
      var myChart = echarts.init(chartDom)
      var option
      option = {
        title: {
          text: "饼状图",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 6000, name: "华东" },
              { value: 7800, name: "华南" },
              { value: 12984, name: "华北" },
              { value: 14028, name: "西部" },
              { value: 14091, name: "其他" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
      option && myChart.setOption(option)
      //自适应
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    /*柱状图*/
    showEchart2() {
      var chartDom = document.getElementById("Histogram")
      var myChart = echarts.init(chartDom)
      var option
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31", "2018-1-1"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "华东",
            type: "bar",
            emphasis: {
              focus: "series"
            },
            data: [2999, 3111, 4100, 3565, 3528, 6000]
          },
          {
            name: "华南",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series"
            },
            data: [5090, 2500, 3400, 6000, 6400, 7800]
          },
          {
            name: "华北",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series"
            },
            data: [6888, 4000, 8010, 12321, 13928, 12984, 310]
          },
          {
            name: "西部",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series"
            },
            data: [9991, 4130, 7777, 12903, 13098, 14028, 410]
          },
          {
            name: "其他",
            type: "bar",
            data: [15212, 5800, 10241, 14821, 15982, 14091, 1570],
            emphasis: {
              focus: "series"
            },
            markLine: {
              lineStyle: {
                type: "dashed"
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          },
        ]
      }

      option && myChart.setOption(option)
      //自适应
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin: 10px 20px;
}
#main {
  margin-left: 15px;
}
#box {
  text-align: right;
}
.echarts {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#Histogram {
  margin-top: 20px;
	margin-left: 60px;
}
</style>
