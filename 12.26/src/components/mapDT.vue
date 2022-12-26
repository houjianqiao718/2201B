<template>
  <div class="map">
    <div id="box" style="width: 100%; height: 300px"></div>
    <ul>
      <li>订单量</li>
      <li>销售额</li>
      <li>用户数</li>
      <li>返单量</li>
    </ul>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("box"));
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 98%;
  height: 350px;
  background-color: #424446;
}
ul{
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 900;
  height: 25px;
  line-height: 25px;
  background-color: #353941;
  margin-top: 56px;
}
</style>
