<template>
  <!-- 左边上部 -->
  <div class="left1">
    <div class="text"><span>慕课外卖用户总数</span></div>
    <div><span class="span2">User Total Count</span></div>
    <div><span class="total">2,025,893</span></div>
    <div class="shul">
      <span class="shul-span1">每日增长率: <span> 158.03% </span></span>
      <span class="shul-span2">每月增长率: <span> 222.54% </span></span>
    </div>
    <div class="div"><div class="xian"></div></div>
  </div>
</template>

<style lang="scss" scoped>
.left1 {
  background-color: #424345;
  padding: 10px 15px;
  .text {
    font-size: 14px;
    font-weight: 900;
  }
  .span2 {
    font-size: 6px;
    transform: scale(0.5);// 缩放
  }
  .total {
    font-family: DIN;
    font-size: 24px;
    font-weight: 900;
  }
  .shul {
    font-size: 10px;
    .shul-span1 {
      color: #88a555;
    }
    .shul-span2 {
      color: #63a900;
      margin-left: 6px;
    }
  }
  .div {
    border: 1px solid #fff;
    margin-top: 4px;
    .xian {
      width: 100%;
      height: 3px;
      background-color: #8a8a8c;
      margin: 1px 0;
    }
  }
}
</style>
