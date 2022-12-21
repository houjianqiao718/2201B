<template>
  <div class="about">
    <div id="box" style="width: 1400px; height: 800px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import data from "@/assets/data/中华人民共和国.json";
export default {
  data() {
    return {
      data,
    };
  },
  mounted() {
    var myEcharts = echarts.init(document.getElementById("box"));
    echarts.registerMap("chinaMap", this.data);
    var option = {
      geo: {
        type: "map", // 指定类型为地球
        map: "chinaMap",
        roma: true,
        label: {
          show: true, // 名称显示
        },
        zoom: 1.2, // 缩放比例
      },
    };
    myEcharts.setOption(option);
  },
};
</script>
