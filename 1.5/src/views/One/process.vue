<template>
  <div class="process">
    <h3>流程申请</h3>
    <div class="br"></div>
    <div class="box">
      <ul>
        <li>加班离职</li>
        <li>请假调休</li>
        <li>审批列表</li>
        <li>我的信息</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.process{
  width: 100%;
  height: 206px;
  background-color: #fff;
  padding: 20px;
  h3{
    margin: 0;
    font-weight: normal;
  }
  .br{
    width: 80px;
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