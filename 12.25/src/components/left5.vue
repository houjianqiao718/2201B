<template>
  <div class="left5">
    <div id="box" style="width: 100%; height: 170px"></div>
    <div class="hr"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var chartDom = document.getElementById("box");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "慕课外卖骑手概况",
        subtext: "Rider Growth rate",
        textStyle: {
          color: "#fff",
          fontWeight: "bolder",
          fontSize: 14,
        },
        subtextStyle: {
          color: "#ccc",
          fontWeight: "bolder",
          fontSize: 8,
        },
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      //   legend: {
      //     data: ["今日接单骑手", "今日新增骑手"],
      //     right: "0",
      //     inactiveColor: '#fff'
      //   },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "01月",
          "02月",
          "03月",
          "04月",
          "05月",
          "06月",
          "07月",
          "08月",
          "09月",
          "10月",
          "11月",
          "12月",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "今日接单骑手",
          type: "line",
          stack: "Total",
          data: [150, 30, 20, 24, 160, 16, 163, 79, 111, 67, 34, 56],
        },
        {
          name: "今日新增骑手",
          type: "line",
          stack: "Total",
          data: [30, 152, 36, 67, 134, 56, 123, 45, 103, 76, 83, 56],
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.left5 {
  padding: 0 15px 10px 15px;
  background-color: #2b2c2e;
}
.hr {
  width: 100%;
  height: 6px;
  margin-top: 10px;
  background-color: #3c3d40;
}
</style>
