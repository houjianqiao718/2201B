import { getWagetop, getWagetable } from "@/api/Wages"

const state = {
  tableData: [], //定义表格数组
  _tableData: [], //定义表格数组
  WagesTop: [], //定义头部数组
  total: 0 //总数量
}

const mutations = {
  // 头部数据
  WagesTopList(state, obj) {
    // console.log(obj)
    state.WagesTop = obj.depts
    state.WagesTop.forEach((ele) => {
      ele.check = false
    })
  },
  // 表格数据
  WagesTableDataList(state, obj) {
    state.total = obj.total
    state.tableData = obj.rows
    state._tableData = obj.rows
  }
}

const actions = {
  //请求头部数据
  WagesTop(ctx) {
    getWagetop().then((res) => {
      console.log(res)
      ctx.commit("WagesTopList", res.data.data)
    })
  },
  //请求表格数据
  WagesTableData(ctx, obj) {
    getWagetable(obj).then((res) => {
      console.log(res)
      ctx.commit("WagesTableDataList", res.data.data)
    })
  }
}

//导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
