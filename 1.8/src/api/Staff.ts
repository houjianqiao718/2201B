/*封装员工接口*/
import { http, apis } from '@/Utils/request'

export function Staff() {
  return http({
    url: apis('/sys/user?page=1&size=10'),
    method: 'get'
  })
}
