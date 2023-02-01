<template>
  <div>
    <h3>子组件</h3>
    <!-- <button @click="showParent">调用父组件的数据和方法</button> -->
  </div>
</template>
<script>
export default {
  name: "Child",
  //this.$parent
    // methods: {
    //     showParent() {
    //     // 获取到所有的子组件
    //     console.log(this.$parent);
    //     // 获取指定子组件中的指定数据
    //     console.log(this.$parent.msg);
    //     // 调用子组件的方法
    //     this.$parent.fun();
    //     },
    // },

    //this.$children 是一个数组类型，它包含了所有子组件对象
    data () {
      return {
        msg: 'hello'
      }
    },
    methods: {
      fun () {
        console.log('children')
      }
    }

};
</script>