/*封装工资接口*/
import { http, apis } from '@/Utils/request'

export function salary(data: object) {
  return http({
    url: apis('/salarys/list'),
    method: 'post',
    data
  })
}

export function depaerMent() {
  return http({
    url: apis('/company/department'),
    method: 'GET'
  })
}
