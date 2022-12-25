<template>
  <div class="left6">
    <div id="div" style="width: 350px; height: 220px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var chartDom = document.getElementById("div");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      color: ['#d1f88a'],
      title: {
        text: "当前热卖品类",
        subtext: "Hot Categories",
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
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.left6 {
  padding: 0 15px 10px 15px;
  background-color: #2b2c2e;
}
</style>
