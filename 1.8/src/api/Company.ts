/*封装公司设置接口*/
import { http, apis } from '@/Utils/request'

export function getCompany() {
  return http({
    url: apis('/sys/role?page=1&pagesize=10'),
    method: 'get'
  })
}

export function getCompanyInformation() {
  return http({
    url: apis('/company/1?id=1'),
    method: 'get'
  })
}
