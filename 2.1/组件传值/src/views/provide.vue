<template>
<!-- provide与inject的作用是实现祖先与后代组件间的通信 -->
<!-- 就是父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据 -->
  <div class="home">
    <div style="background: pink; height: 100px">
      {{ justN }}
    </div>
    <inject msg="Welcome">出来吧</inject>
    <button @click="tap">修改子组件的内容</button>
  </div>
</template>
<script>
import inject from "@/components/inject.vue";
import { ref, provide } from "vue";
export default {
  name: "Home",
  components: {
    inject,
  },
  setup() {
    let justN = ref("你好");
    provide("content", justN);
    function tap() {
      //当调用方法修改justN的值时provide则自动根据justN的变化将值发送给后代组件
      justN.value = "修改了";
    }
    return {
      tap,
      justN,
    };
  },
};
</script>