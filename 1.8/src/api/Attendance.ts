/*封装考勤接口*/
import { http, apis } from '@/Utils/request'

export function Attendance(data: object) {
  return http({
    url: apis('/attendances?page=1&pagesize=10'),
    method: 'get',
    data
  })
}

export function depaerMent() {
  return http({
    url: apis('/company/department'),
    method: 'get'
  })
}
