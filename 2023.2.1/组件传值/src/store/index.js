import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 利用 vuex 进行组件通信
    // 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了
    data: [
      {name: '张三', age: 18},
      {name: '李四', age: 20},
      {name: '王五', age: 22},
      {name: '赵六', age: 28},
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
