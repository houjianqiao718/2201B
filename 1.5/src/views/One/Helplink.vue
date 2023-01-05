<template>
  <div class="Helplink">
    <h3>帮助链接</h3>
    <div class="br"></div>
    <div class="box">
      <ul>
        <li><img src="@/assets/url1.png" alt="" /></li>
        <li><img src="@/assets/url2.png" alt="" /></li>
        <li><img src="@/assets/url3.png" alt="" /></li>
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
  margin: 10px 0 0 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    img{
      width: 150px;
      height: 130px;
    }
  }
}
</style>
