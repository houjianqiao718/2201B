<template>
  <div class="about">
    <!-- 插值表达式也叫模板字符串 -->
    <h2>{{ msg }}</h2>
    <!-- 绑定元素 v-bind--可以简写为： -->
    <span v-bind:title="message"> 鼠标悬停查看此处绑定的提示信息！ </span>
    <!-- <span :title="message"> 鼠标悬停查看此处绑定的提示信息！ </span> -->
    <!-- v-for -->
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
    </ul>
    <button @click="change">修改下标数组</button>
    <!-- v-model -->
    <div>
      <p>{{input}}</p>
      <input type="text" v-model="input" @change="modules">
    </div>
    <!-- v-if -->
    <div>
      <p v-if="flag">出现了</p>
      <span v-else>消失了</span>
      <button @click="flag = !flag">点击显示</button>
    </div>
    <!-- v-on绑定事件--可以简写为@ -->
    <div>
      <p>{{ mess }}</p>
      <button v-on:click="reversemess">反转消息</button>
      <!-- <button @click="reversemess">反转消息</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      message: '页面加载于 ' + new Date().toLocaleString(),
      list: [
        {id: 1, name: '张三'},
        {id: 2, name: '李四'},
        {id: 3, name: '王五'},
        {id: 4, name: '赵六'},
        {id: 5, name: '苟八'}
      ],
      input: '',
      flag: false,
      mess: 'Hello Vue'
    };
  },
  methods: {
    change(){
      this.list[0].name = '111'
    },
    reversemess(){
      this.mess = this.mess.split('').reverse().join('')
    },
    modules(e){
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>