/*封装登录接口*/
import { http, apis } from '@/Utils/request'

export function login(data: { mobile: string; password: string }) {
  return http({
    url: apis('/sys/login'),
    method: 'post',
    data: data
  })
}
