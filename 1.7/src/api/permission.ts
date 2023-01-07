/*封装权限接口*/
import { http, apis } from '@/Utils/request'

export function permission() {
  return http({
    url: apis('/sys/permission?type=1&pid=0'),
    method: 'get'
  })
}
