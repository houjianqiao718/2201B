import { getSectop, getSecurity } from "@/api/Security"

const state = {
  tableData: [], //定义表格数组
  _tableData: [], //定义表格数组
  Sectop: [], //定义头部数组
  total: 0 //总数量
}

const mutations = {
  // 头部数据
  SectopList(state, obj) {
    // console.log(obj)
    state.Sectop = obj.depts
    state.Sectop.forEach((ele) => {
      ele.check = false
    })
  },
  // 表格数据
  tableDataList(state, obj) {
    state.total = obj.total
    state.tableData = obj.rows
    state._tableData = obj.rows
  }
}

const actions = {
  //请求头部数据
  getSectop(ctx) {
    getSectop().then((res) => {
      console.log(res)
      ctx.commit("SectopList", res.data.data)
    })
  },
  //请求表格数据
  getTableData(ctx, obj) {
    getSecurity(obj).then((res) => {
      console.log(res)
      ctx.commit("tableDataList", res.data.data)
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
