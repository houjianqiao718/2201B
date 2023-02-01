<template>
<!-- 这里是子组件 -->
    <div>
        <!-- 父传子 -->
        <!-- 父组件传过来的消息是：{{msg}} -->

        <!-- 子传父 -->
        <button @click="clicknum">click点击</button>
    </div>
</template>

<script>
export default {
    props: {
        // msg: String  //父传子
    },
    data() {
        return {
            childnum: 0
        }
    },
    methods: {
        clicknum(){
            this.$emit("addnum", this.childnum++)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>