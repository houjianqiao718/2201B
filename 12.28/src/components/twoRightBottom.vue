<template>
    <div class="twoRightBottom">
        <h4>地区商家销售排行</h4>
        <div class="box">
            <div class="div">
                <span class="text">北京</span>
                <div class="con"></div>
                <img src="@/assets/yuan1.png" alt="">
                <div class="foot">
                    <span class="color">商家</span>
                    <span>订单数</span>
                    <span>销售额</span>
                </div>
                <ul>
                    <li>
                        <span>麦当劳</span>
                        <span>356</span>
                        <span class="green">13542</span>
                    </li>
                    <li class="li">
                        <span>必胜客</span>
                        <span>489</span>
                        <span class="green">98330</span>
                    </li>
                    <li>
                        <span>麦当劳</span>
                        <span>356</span>
                        <span class="green">13542</span>
                    </li>
                </ul>
            </div>
            <div class="div">
                <span class="text">上海</span>
                <div class="con"></div>
                <img src="@/assets/yuan2.png" alt="">
                <div class="foot">
                    <span class="color">商家</span>
                    <span>订单数</span>
                    <span>销售额</span>
                </div>
                <ul>
                    <li>
                        <span>麦当劳</span>
                        <span>356</span>
                        <span class="green">13542</span>
                    </li>
                    <li class="li">
                        <span>必胜客</span>
                        <span>489</span>
                        <span class="green">98330</span>
                    </li>
                    <li>
                        <span>麦当劳</span>
                        <span>356</span>
                        <span class="green">13542</span>
                    </li>
                </ul>
            </div>
            <div class="div">
                <span class="text">南京</span>
                <div class="con"></div>
                <img src="@/assets/yuan3.png" alt="">
                <div class="foot">
                    <span class="color">商家</span>
                    <span>订单数</span>
                    <span>销售额</span>
                </div>
                <ul>
                    <li>
                        <span>麦当劳</span>
                        <span>356</span>
                        <span class="green">13542</span>
                    </li>
                    <li class="li">
                        <span>必胜客</span>
                        <span>489</span>
                        <span class="green">98330</span>
                    </li>
                    <li>
                        <span>麦当劳</span>
                        <span>356</span>
                        <span class="green">13542</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.twoRightBottom{
    width: 98%;
    height: 250px;
    background-color: #373737;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    h4{
        margin: 0;
        margin-bottom: 8px;
    }
    .box{
        display: flex;
        justify-content: space-between;
        .div{
            background-color: #2d2d2d;
            padding: 6px;
            width: 140px;
            box-sizing: border-box;
            margin: 0 3px;
            .text{
                font-size: 12px;
            }
            .con{
                width: 100%;
                height: 6px;
                background-color: #5d5d5d;
                margin-top: 5px;
            }
            img{
                width: 65px;
                height: 60px;
                margin: 6px 0;
                margin-left: 30px;
            }
            .foot{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                background-color: #353941;
                color: #798693;
                .color{
                    background-color: #b2d17e;
                    color: #fff;
                    padding: 4px;
                    box-sizing: border-box;
                }
            }
            ul{
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 10px;
                    background-color: #373737;
                    line-height: 22px;
                    padding: 0 3px;
                    .green{
                        color: #899e65;
                    }
                }
                .li{
                    background-color: #282828;
                }
            }
        }
    }
}
</style>