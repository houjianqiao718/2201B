/*首页接口*/
import { http, apis } from '@/Utils/request'

/*获取用户名*/
export function getUsername() {
  return http({
    url: apis('/sys/profile'),
    method: 'post'
  })
}
