/*封装审批接口*/
import { http, apis } from '@/Utils/request'

export function getApproval(data?: { page: number; pageSize: number }) {
  return http({
    url: apis('/user/process/instance/1/10'),
    method: 'put',
    data
  })
}
