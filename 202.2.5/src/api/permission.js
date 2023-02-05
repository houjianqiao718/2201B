/*权限管理接口*/
import http from "@/Untils/httpRequest"

/*表格数据接口*/
export function permission(data) {
  return http({
    url: http.apis("/sys/permission"),
    method: "get",
    data
  })
}

/**添加权限 */
export function AddPerm(data) {
  return http({
    url: http.apis("/sys/permission"),
    method: "POST",
    data
  })
}

/**编辑权限 */
export function EditPerm(id) {
  return http({
    url: http.apis(`/sys/permission/${id}`),
    method: "PUT"
  })
}

/**删除权限 */
export function DelPerm(id) {
  return http({
    url: http.apis(`/sys/permission/${id}`),
    method: "DELETE"
  })
}
