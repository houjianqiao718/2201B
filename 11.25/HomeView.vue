<template>
  <div class="home">
    <div class="app">
      <div class="container">
        <!-- 头部 -->
        <header class="heading">
          <div class="img" data-v-73841b6c="">
            <img src="https://www.todolist.cn/img/note.75134fb0.svg" />
          </div>
          <div class="title">To-Do List</div>
        </header>
        <!-- 中间部分 -->
        <div class="form">
          <h1 class="h1">~ Today I need to ~</h1>
          <form class="form-wrapper">
            <div class="form-input">
              <input id="input" placeholder="Add new todo..." v-model="input" @keydown.enter="enter" />
            </div>
            <button type="submit" class="submit-btn">
              <span class="span" @click="addList">Submit</span>
            </button>
          </form>
        </div>
          <!-- 未完成列表 -->
          <ul class="todos" v-show="status == 0 || status == 1">
            <li class="todos-item" v-for="(item, index) in $store.state.todoList" :key="item.id">
              <div class="checkbox-btn">
                <input class="checkbox" type="checkbox"  @change="check(index)" v-model="item.check" />
                <p class="content">{{item.input}}</p>
              </div>
              <div class="close-btn" @click="del(index)">X</div>
            </li>
          </ul>
          <!--已完成列表 -->
          <ul class="todos" v-show="status == 0 || status == 2">
            <li class="todos-items" v-for="(item, index) in $store.state.list" :key="item.id">
              <div class="checkbox-btn">
                <!-- <input class="checkbox" type="checkbox" v-model="item.check" /> -->
                <img class="image" src="../assets/duigoux.png" alt="" @click="toggle(index)"/>
                <p class="content">{{item.input}}</p>
              </div>
              <div class="close-btn" @click="dels(index)">X</div>
            </li>
          </ul>
        <!-- 底部部分 -->
        <div class="foot" v-if="$store.state.todoList.length == '' && $store.state.list.length == ''">
          <svg class="svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clipboard-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-v-132cabf7=""><path class="" fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"></path></svg>
          <span :style="{color:'#b7b8b8'}">Congrat, you have no more tasks to do</span>
        </div>
        <footer class="options" v-else>
          <span class="item">{{$store.state.todoList.length}} item left</span>
          <div class="filters">
            <span @click="status = 0" :class=" ['option', status == 0 ? 'active' : '' ]">All</span>
            <span @click="status = 1" :class=" ['option', status == 1 ? 'active' : '' ]">Active</span>
            <span @click="status = 2" :class=" ['option', status == 2 ? 'active' : '' ]">Completed</span>
          </div>
          <span @click="clear" :class=" ['option', status == 3 ? 'active' : '' ]">Clear completed</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      status: 0
    };
  },
  methods: {
    // 点击按钮添加
    addList(){
      // 判断输入内容是否为空
      if (this.input == '') {
        alert('不能为空！')
      }else {
        // 提交commit至vuex
        this.$store.commit('list',{
          input: this.input,
          check: false,
          id: new Date().getTime()
        })
        this.input = ''
      }
    },
    // 回车事件添加
    enter(){
      // 判断输入内容是否为空
      if (this.input == '') {
        alert('不能为空！')
      }else {
        // 提交commit至vuex
        this.$store.commit('list',{
          input: this.input,
          check: false
        })
        this.input = ''
      }
    },
    // 点击复选框事件
    check(i){
      this.$store.commit('change', i)
    },
    // 进行切换
    toggle(index){
      this.$store.commit('toggle', index)
    },
    // 删除
    del(index){
      this.$store.commit('del', index)
    },
    dels(index){
      this.$store.commit('dels', index)
    },
    // 清空
    clear(){
      this.status = 3
      this.$store.commit('clear')
    }
  },
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300); 
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  font-family: "Yanone Kaffeesatz", sans-serif !important; 
}
.container {
  text-align: center;
  width: 400px;
  max-width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}
.app {
  width: 400px;
  padding: 30px 40px 20px;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}
.heading {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  transform: rotate(3deg);
  font-size: 18px;
  width: 98px;
  height: 45px;
  line-height: 45px;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  color: #fff;
  background: #fe7345;
  user-select: none;
}
.img {
  width: 80px;
  height: 88px;
  margin-right: 10px;
}
.form {
  margin-top: 25px;
}
.h1 {
  font-size: 22px;
  margin-bottom: 30px;
}
.form-wrapper {
  display: flex;
  justify-content: center;
}
.form-input {
  display: inline-block;
  flex-grow: 0.65;
  margin-right: 15px;
  font-size: 12px;
  input {
    width: 100%;
    border: 0;
    outline: none;
    border-bottom: 3px dashed #fe7345;
    padding: 5px 0 3px;
    font-size: 18px;
    background: transparent;
  }
}
.submit-btn::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 2px;
  width: 86%;
  height: 89%;
  transform: scaleY(1.1);
  border: 1px solid #494a4b;
  border-radius: inherit;
  transform-origin: top;
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
  background-color: #fe7345;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.submit-btn {
  position: relative;
  transform: rotate(4deg);
  border-radius: 6px;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.span {
  position: relative;
  display: block;
  font-size: 16px;
  padding: 5px 8px;
  border: 1px solid #494a4b;
  border-radius: inherit;
  background-color: #fff;
}
.todos {
  margin-top: 20px;
  padding: 0 10px;
}
.todos-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todos-items{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fe7345;
  color: #fff;
  border-radius: 4px;
  padding: 0 4px;
  margin-bottom: 4px;
  text-decoration: line-through;
}
.close-btn {
  font-weight: 900;
}
.checkbox-btn {
  display: flex;
  align-items: center;
  p {
    margin-left: 15px;
  }
}
.options{
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  .item{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }
  .filters{
    display: flex;
    align-items: center;
    span{
      padding: 4px 10px;
      border-radius: 4px;
    }
  }
  .clear{
    padding: 0 0.6em;
    border-radius: 4px;
    transition: all 60ms ease-out;
  }
}
.active{
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;
}
.foot{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  .svg{
    color: rgba(73,74,75,.35);
    width: 16px;
    height: 16px;
  }
}
.image{
  width: 20px;
  height: 20px;
}
</style>