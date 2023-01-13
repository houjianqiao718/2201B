/*工资接口*/
import http from "@/Untils/httpRequest"

/*获取工资模块头部数据*/
export function getWagetop() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}

/*获取工资模块表格数据*/
export function getWagetable(data) {
  return http({
    url: http.apis("/salarys/list"),
    method: "post",
    data
  })
}
/*获取工资设置数据*/
export function getsetting() {
  return http({
    url: http.apis("/salarys/settings"),
    method: "get"
  })
}

/*获取工资报表数据*/
export function getreport(data) {
  return http({
    url: http.apis(`/salarys/reports/202003?yearMonth=${data.yearMonth}&opType=${data.opType}`),
    method: "get",
    data
  })
}
