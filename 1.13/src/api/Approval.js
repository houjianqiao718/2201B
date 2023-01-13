/*审批接口*/
import http from "@/Untils/httpRequest"

/*表格数据*/
export function getApproval(data) {
  return http({
    url: http.apis(`/user/process/instance/${data.page}/${data.pageSize}`),
    method: "put"
  })
}

/*查看信息*/
export function getAppinfo(data) {
  return http({
    url: http.apis(`/user/process/instance/${data}`),
    method: "get"
  })
}
// 流程接口
export function getApptask(data) {
  return http({
    url: http.apis(`/user/process/instance/tasks/${data}`),
    method: "get"
  })
}
