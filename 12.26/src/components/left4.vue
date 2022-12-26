<template>
    <div class="left4">
        <div class="box">
            <div class="left">
                <img src="@/assets/yuan.jpg" alt="">
                <div class="text">
                    <div class="p1">男性用户人数</div>
                    <div class="p2">Number of male</div>
                    <div class="shuzi">9,999 <span class="min">万人</span></div>
                </div>
            </div>
            <div class="left">
                <img src="@/assets/yuan.jpg" alt="">
                <div class="text">
                    <div class="p1">女性用户人数</div>
                    <div class="p2">Number of male</div>
                    <div class="shuzi">9,999 <span class="min">万人</span></div>
                </div>
            </div>
        </div>
        <div class="hr"></div>
    </div>
</template>

<style lang="scss" scoped>
.left4 {
  padding: 0 15px 10px 15px;
  background-color: #2b2c2e;
}
.box{
    display: flex;
    justify-content: space-around;
    .left{
        display: flex;
        img {
            width: 45px;
            height: 45px;
        }
        .text{
            margin-left: 10px;
            .p1{
                font-size: 14px;
                font-weight: 900;
            }
            .p2{
                font-size: 6px;
                transform: scale(0.5); // 缩放
            }
            .shuzi{
                font-weight: 900;
                font-size: 22px;
                font-family: DIN;
                .min{
                    font-size: 12px;
                }
            }
        }
    }
}
.hr {
  width: 100%;
  height: 6px;
  margin-top: 10px;
  background-color: #3c3d40;
}
</style>