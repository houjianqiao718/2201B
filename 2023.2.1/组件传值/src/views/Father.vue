<template>
    <div>
        <!-- 使用v-model来实现组件传值--v-model是v-bind:value和v-on:input的语法糖  v-bind可以简写为:,  v-on可以简写为@-->
        <children2 v-model="rangeValue"></children2>
        <p>value:{{rangeValue}}</p>
    </div>
</template>

<script>
import children2 from "../components/Children2.vue"
export default {
    components: {children2},
    data() {
        return {
            rangeValue: 0
        }
    },
}
</script>

