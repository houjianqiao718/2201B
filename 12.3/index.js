import Vue from 'vue'
import Vuex from 'vuex'
import pers from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pers()],
  state: {
    addTodolist: [], // 定义的添加数组
  },
  getters: {
  },
  mutations: {
    // 添加事件
    addtodo(state, obj){
      state.addTodolist.push(obj) // 向数组添加
    },
    // 已完成确认修改事件
    editTodo(state, obj){
      // console.log(obj);
      state.addTodolist[obj.index] = obj  // 进行赋值
    },
    // 未完成的确认修改事件
    editdone(state, value){
      state.addTodolist[value.index] = value  // 进行赋值
    }
  },
  actions: {
  },
  modules: {
  }
})
