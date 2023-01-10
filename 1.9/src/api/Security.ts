/*封装社保接口*/
import { http, apis } from '@/Utils/request'

export function getSecurity(data?: { page: number; pageSize: number }) {
  return http({
    url: apis('/social_securitys/list'),
    method: 'post',
    data
  })
}

/*社保顶部接口*/
export function getSectop() {
  return http({
    url: apis('/company/department'),
    method: 'get'
  })
}

/*社保历史归档*/
export function getHistory() {
  return http({
    url: apis('/social_securitys/historys/2020/list?year=2020'),
    method: 'get'
  })
}

/*社保月报表*/
export function getMonreport() {
  return http({
    url: apis('/social_securitys/historys/202001?yearMonth=202001&opType=1'),
    method: 'get'
  })
}
