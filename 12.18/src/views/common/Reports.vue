<template>
  <div>
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
import { reports } from "@/untils/reports"
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
    // 折线图
    getOpen() {
      var chartDom = document.getElementById("main")
      var myChart = echarts.init(chartDom)
      reports().then((res) => {
        // console.log(res)
        // console.log(res.data.data)
        var option = {
          title: {
            text: "用户来源"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          ...res.data.data
        }
        myChart.setOption(option)
        //自适应
        window.addEventListener("resize", function () {
          myChart.resize()
        })
      })
    },
    // 饼状图
    showEchart1() {
      var chartDom1 = document.getElementById("box")
      var myChart1 = echarts.init(chartDom1)
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
      option && myChart1.setOption(option)
      //自适应
      window.addEventListener("resize", function () {
        myChart1.resize()
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
            data: [
              "2017-12-27",
              "2017-12-28",
              "2017-12-29",
              "2017-12-30",
              "2017-12-31",
              "2018-1-1"
            ]
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
          }
        ]
      }

      option && myChart.setOption(option)
      //自适应
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    }
  },
  mounted() {
    this.getOpen() // 调用折线图
    this.showEchart1() // 调用饼状图
    this.showEchart2() // 调用柱状图
  }
}
</script>

<style lang="scss" scoped>
#main {
  margin-left: 15px;
}
#box {
  text-align: right;
  margin-left: 10px;
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
