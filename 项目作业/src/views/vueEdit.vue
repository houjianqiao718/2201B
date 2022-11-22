<template>
    <div class="li">
        <div class="edit">
            <div id="box"></div>
        </div>
        <div class="btn">
            <el-button type="primary">提交</el-button>
        </div>
    </div>
</template>

<script>
import inp from "wangeditor"
export default {
    mounted() {
        const editor = new inp('#box')
		editor.create()
    },
}
</script>

<style lang="scss" scoped>
.li{
    overflow: hidden;
}
.edit{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.box{
    width: 700px;
    margin-top: 20px;
}
.btn{
    text-align: center;
    margin-top: 30px;
}
</style>