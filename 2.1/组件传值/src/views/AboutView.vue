<template>
  <div class="parent">
    <!-- 给子组件设置一个ID ref="children" -->
    <Childrens ref="children"></Childrens>
    <div @click="pushMsg">push message</div>

    <!-- 本地存储数据 -->
    <ul>
      <li v-for="(item, index) in $store.state.data" :key="index">
        <span>{{item.name}}</span>
        <span>{{item.age}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Childrens from "../components/Children1";

export default {
  name: "parent",
  components: {
    Childrens,
  },
  methods: {
    pushMsg() {
      // 通过这个ID可以访问子组件的方法
      this.$refs.children.updateMsg("Have you received the clothes？");
      // 也可以访问子组件的属性
      console.log("children props:", this.$refs.children.desc);
    },
  },
};
</script>
