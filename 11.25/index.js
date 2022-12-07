import Vue from 'vue'
import Vuex from 'vuex'
import pers from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pers()],
  state: {
    // 未完成的
    todoList: [],
    // 已完成的
    list: []
  },
  getters: {
  },
  mutations: {
    // 向页面添加
    list(state, obj){
      state.todoList.push(obj);
    },
    // 点击复选框事件
    change(state, i){
      state.list.push(state.todoList[i]);
      state.todoList.splice(i, 1);
    },
    // 点击进行切换
    toggle(state, index){
      state.list[index].check = false;
      state.todoList.push(state.list[index]);
      state.list.splice(index, 1);
    },
    // 删除
    del(state, i){
      state.todoList.splice(i, 1);
    },
    dels(state, i){
      state.list.splice(i, 1);
    },
    // 清空
    clear(state){
      state.list.length = []
    }
  },
  actions: {
  },
  modules: {
  }
})
