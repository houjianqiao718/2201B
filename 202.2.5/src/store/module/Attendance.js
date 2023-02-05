import { Attendancetop, Attendancetable } from "@/api/Attendance"

const state = {
  tableData: [], //定义表格数组
  _tableData: [], //定义表格数组
  AttTop: [], //定义头部数组
  total: 0 //总数量
}

const mutations = {
  // 头部数据
  AttTopList(state, obj) {
    // console.log(obj)
    state.AttTop = obj.depts
    state.AttTop.forEach((ele) => {
      ele.check = false
    })
  },
  // 表格数据
  AttTableDataList(state, obj) {
    // console.log(obj)
    state.total = obj.total
    state.tableData = obj.rows
    state._tableData = obj.rows
  }
}

const actions = {
  //请求头部数据
  getAttTop(ctx) {
    Attendancetop().then((res) => {
      console.log(res)
      ctx.commit("AttTopList", res.data.data)
    })
  },
  //请求表格数据
  getTableData(ctx, obj) {
    Attendancetable(obj).then((res) => {
      console.log(res)
      ctx.commit("AttTableDataList", res.data.data.data)
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
