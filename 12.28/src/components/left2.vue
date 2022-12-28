<template>
    <div class="left2">
        <div class="box">
            <div>
                <h3>慕课外卖用户年龄分布&平均年龄</h3>
                <span class="span">Distribution of Age</span>
            </div>
            <div class="age">
                <span class="big">30.49</span><span class="small">岁</span>
            </div>
        </div>
        <div class="xian">
            <div class="span1"></div>
            <div class="span2"></div>
            <div class="span3"></div>
            <div class="span4"></div>
        </div>
        <div class="br"></div>
        <div class="con">
            <span>0</span>
            <span>500,000</span>
            <span>1,000,000</span>
            <span>1,500,000</span>
            <span>2,000,00</span>
            <span>2,500,00</span>
        </div>
        <div class="foot">
            <div class="shuzi">
                <div class="sp1">543,512</div>
                <div class="sp2"><span class="yuan"></span> 0-20</div>
            </div>
            <div class="shuzi">
                <div class="sp1">744,791</div>
                <div class="sp2"><span class="yuan"></span> 20-30</div>
            </div>
            <div class="shuzi">
                <div class="sp1">964,356</div>
                <div class="sp2"><span class="yuan"></span> 30-50</div>
            </div>
            <div class="shuzi">
                <div class="sp1">443,325</div>
                <div class="sp2"><span class="yuan"></span> >50</div>
            </div>
        </div>
        <div class="hr"></div>
    </div>
</template>

<style lang="scss" scoped>
.left2{
    padding: 10px 15px;
    background-color: #2b2c2e;
}
.box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
        margin: 0;
        font-size: 14px;
    }
}
.span{
    font-size: 10px;
}
.age{
    display: flex;
    align-items: flex-end;
}
.big{
    font-family: DIN;
    font-size: 24px;
    font-weight: 900;
}
.small{
    font-size: 10px;
}
.xian{
    width: 100%;
    height: 4px;
    display: flex;
    margin-top: 5px;
    .span1{
        display: block;
        width: 60px;
        height: 100%;
        background-color: #74a631;
    }
    .span2{
        display: block;
        width: 110px;
        height: 100%;
        background-color: #bef563;
    }
    .span3{
        display: block;
        width: 110px;
        height: 100%;
        background-color: #cafc89;
    }
    .span4{
        display: block;
        width: 60px;
        height: 100%;
        background-color: #fbfd8e;
    }
}
.br{
    width: 100%;
    height: 1px;
    background-color: #515458;
    margin-top: 6px;
}
.con{
    width: 100%;
    font-size: 6px;
    transform: scale(0.8);//缩放0.8
    color: #555a62;
    display: flex;
    justify-content: space-between;
}
.foot{
    display: flex;
    justify-content: space-around;
    color: #fff;
    .shuzi{
        text-align: center;
        margin-top: 10px;
        .sp1{
            font-size: 14px;
        }
        .sp2{
            font-size: 6px;
            transform: scale(0.8);// 缩放0.8
            .yuan{
                display: inline-block;
                width: 6px;
                height: 6px;
                background-color: #74a631;
                border-radius: 6px;
            }
        }
    }
}
.hr{
    width: 100%;
    height: 6px;
    margin-top: 6px;
    background-color: #3c3d40;
}
</style>