<template>
  <div class="navigation">
    <h3>快速开始/便捷导航</h3>
    <div class="br"></div>
    <div class="box">
      <ul>
        <li>人事月报</li>
        <li>考勤查询</li>
        <li>考勤统计</li>
        <li>员工审核</li>
        <li>组织架构</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation{
  width: 100%;
  height: 206px;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  h3{
    margin: 0;
    font-weight: normal;
  }
  .br{
    width: 160px;
    height: 3px;
    background-color: #8a97f8;
    margin-top: 4px;
  }
}
.box{
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      padding: 10px 30px;
      border: 1px solid #ccc;
      margin: 20px 10px 0 20px;
      border-radius: 5px;
      font-size: 14px;
      color: rgb(132, 132, 132);
    }
  }
}
</style>