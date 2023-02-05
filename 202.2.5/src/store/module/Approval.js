import { getApproval } from "@/api/Approval"

const state = {
  /*表格数据*/
  tableData: []
}

const mutations = {
  // 请求表格数据
  tableDataList(state, obj) {
    state.total = obj.total
    state.tableData = obj.rows
  }
}

const actions = {
  //请求表格数据
  getTableData(ctx, obj) {
    getApproval(obj).then((res) => {
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
