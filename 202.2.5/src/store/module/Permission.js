import { permission, AddPerm, EditPerm, DelPerm } from "@/api/permission"
import { Message } from "element-ui"

const state = {
  list: [], //定义的空数组
  total: 0 //总数量
}

const mutations = {
  /*修改数据*/
  // 使用递归
  permList(state, obj) {
    obj.forEach((item) => {
      if (item.pid == "0") {
        state.list.push(item)
        state.list.forEach((item) => {
          item.children = []
          obj.forEach((ele) => {
            if (item.id == ele.pid) {
              item.children.push(ele)
            }
          })
        })
      }
    })
    state.total = obj.total
  },
  /*删除*/
  del(state, obj) {
    DelPerm(obj.id).then((res) => {
      Message.error(res.data.message)
    })
  }
}
const actions = {
  //请求数据
  getList(ctx, obj) {
    permission(obj).then((res) => {
      console.log(res)
      ctx.commit("permList", res.data.data)
    })
  },
  /**添加或者编辑 */
  addOrEdit(ctx, obj) {
    console.log(obj)
    if (!obj.id) {
      AddPerm(obj).then((res) => {
        console.log(res)
        Message({
          message: res.data.message,
          type: "success"
        })
      })
    } else {
      EditPerm(obj.id).then((res) => {
        Message.error(res.data.message)
      })
    }
  }
}

//导出
export default {
  namespaced: true, // 命名空间
  state,
  mutations,
  actions
}
