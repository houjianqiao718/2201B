<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 2.为Echarts准备一个Dom -->
      <div id="main" style="width: 800px; height: 450px"></div>
    </el-card>
  </div>
</template>

<script>
// 1.导入echarts
import * as echarts from "echarts";
import _ from "lodash";

export default {
  data() {
    return {
      // 需要合并的数据
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
    };
  },
  created() {},
  // 此时,页面上的元素,已经被渲染完毕了
  async mounted() {
    // 3.基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("main"));
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    const { data: res } = await this.$http.request("/reports/type/1");
    if (res.meta.status !== 200) return this.$message("获取折线图数据失败!");
    // 数据合并
    console.log(res.data);
    const result = _.merge(res.data, this.options);
    console.log(result);
    // 5.展示数据
    myChart.setOption(result);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-card {
  margin: 10px 20px;
}
#main {
  margin-left: 15px;
}
</style>
