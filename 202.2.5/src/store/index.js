import Vue from "vue"
import Vuex from "vuex"
import staff from "./module/staff"
import Setup from "./module/Setup"
import Permission from "./module/Permission"
import Security from "./module/Security"
import Approval from "./module/Approval"
import Attendance from "./module/Attendance"
import Wages from "./module/Wages"
Vue.use(Vuex)

export default new Vuex.Store({
  getters: {},
  modules: {
    namespaced: true,
    staff,
    Setup,
    Permission,
    Security,
    Approval,
    Attendance,
    Wages
  }
})
