<template>
<!-- 这里是父组件 -->
  <div class="home">
    <!-- 父传子--通过在父组件中给子组件标签上添加自定义属性,然后在子组件中通过props来接收 -->
    <!-- <children :msg="msg"></children> -->

    <!-- 子传父--通过在父组件中的子组件标签上添加自定义事件,然后子组件用this.$emit来触发 -->
    这里是计数: {{num}}
    <children @addnum="getnum"></children>
  </div>
</template>

<script>
import children from '../components/Children.vue'
export default {
  components: {children},
  data() {
    return {
      // msg: 'hello Vue'  //父传子
      num: 0
    }
  },
  methods: {
    getnum(childnum){
      this.num = childnum
    }
  }
}
</script>
