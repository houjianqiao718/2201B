<template>
  <div>
    <!-- $children 指代的是子组件，返回的是一个组件集合 -->
    <!-- $parent  指代的是父组件 ，返回的是一个组件集合 -->
    <!-- $children 并不保证顺序,他也不是响应式的 -->
    <!-- parent当前组件树的根Vue实例。如果当前实例没有父实例，此实例将会是其自己. -->
    <h3>父组件</h3>
    <childrentow></childrentow>
  </div>
</template>
<script>
// 引入子组件
import childrentow from "../components/childrentow.vue";
export default {
  name: "Parent",
  components: {
    childrentow,
  },
  //this.$parent
    //   data() {
    //     return {
    //       msg: "hello",
    //     };
    //   },
    //   methods: {
    //     fun() {
    //       console.log("parent");
    //     },
    //   },

    //this.$children
    mounted () {
      // 获取到所有的子组件，结果是一个数组
      console.log(this.$children)
      // 获取指定子组件中的指定数据
      console.log(this.$children[0].msg)
      // 调用子组件的方法
      this.$children[0].fun()
    }
};
</script>
