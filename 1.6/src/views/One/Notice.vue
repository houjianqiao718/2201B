<template>
  <div class="Notice">
    <h4>公告</h4>
    <ul>
      <li>
        <div class="left">
          <img src="@/assets/Apple.png" alt="">
        </div>
        <div class="right">
          <div class="box">
            <span class="color">朱继柳</span>
            <span>发布了第一期"传智大讲堂"互动讨论获奖名单公布</span>
          </div>
          <span>2018-07-21 15:21:38</span>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="@/assets/Apple.png" alt="">
        </div>
        <div class="right">
          <div class="box">
            <span class="color">朱继柳</span>
            <span>发布了第一期"传智大讲堂"互动讨论获奖名单公布</span>
          </div>
          <span>2018-07-21 15:21:38</span>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="@/assets/Apple.png" alt="">
        </div>
        <div class="right">
          <div class="box">
            <span class="color">朱继柳</span>
            <span>发布了第一期"传智大讲堂"互动讨论获奖名单公布</span>
          </div>
          <span>2018-07-21 15:21:38</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.Notice{
  width: 100%;
  height: 260px;
  background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  box-sizing: border-box;
  h4{
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
}
ul{
  li{
    display: flex;
    align-items: center;
    padding: 6px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .left{
      img{
        width: 50px;
        height: 50px;
      }
    }
    .right{
      font-size: 12px;
      .box{
        margin-bottom: 4px;
        .color{
          color: #8aa4f9;
        }
      }
    }
  }
}
</style>