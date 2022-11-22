<template>
  <div>
    <div class="box">
        <div id="main"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "用户分布",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 250, name: "北京" },
            { value: 200, name: "上海" },
            { value: 150, name: "深圳" },
            { value: 130, name: "杭州" },
            { value: 1200, name: "其他" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
#main {
  width: 1200px;
  height: 600px;
  margin-top: 30px;
}
.box{
    display: flex;
    justify-content: center;
}
</style>