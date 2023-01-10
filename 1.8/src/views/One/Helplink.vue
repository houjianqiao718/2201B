<template>
  <div class="Helplink">
    <h3>帮助链接</h3>
    <div class="br"></div>
    <div class="box">
      <div class="box-img">
        <img src="@/assets/url.png" alt="" />
      </div>
      <ul>
        <li>入门指南</li>
        <li>在线帮助手册</li>
        <li>联系技术支持</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Helplink {
  width: 100%;
  height: 206px;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  h3 {
    margin: 0;
    font-weight: normal;
  }
  .br {
    width: 80px;
    height: 3px;
    background-color: #8a97f8;
    margin-top: 4px;
  }
}
.box {
  margin: 15px 0 0 20px;
  .box-img {
    text-align: center;
    img {
      width: 85%;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
}
</style>
