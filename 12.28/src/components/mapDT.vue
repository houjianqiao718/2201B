<template>
  <div class="map">
    <h4>慕课外卖销售大盘</h4>
    <div class="text">User Total Count</div>
    <div id="DT" style="width: 500px; height: 360px"> </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import data from "@/assets/js/中华人民共和国.json";
export default {
  data() {
    return {
      data
    }
  },
  mounted() {
    var myEcharts = echarts.init(document.getElementById("DT"));
    echarts.registerMap("chinaMap", this.data);
    var option = {
      geo: {
        type: "map", // 指定类型为地球
        map: "chinaMap",
        roma: true,
        label: {
          show: true, // 名称显示
        },
        zoom: 1.3, // 缩放比例
      },
    };
    myEcharts.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 98%;
  height: 310px;
  background-color: #424446;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
h4{
  margin: 0;
}
.text{
  font-size: 12px;
  transform: scale(0.8); // 缩放
  width: 90px;
}
</style>
