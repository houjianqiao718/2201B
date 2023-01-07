/*封装登录校验*/
export interface LoginForm {
  mobile: string
  password: string
}

/*封装权限校验*/
export interface User {
  code: string
  description: string
  enVisible: string
  id: string
  name: string
  pid: string
  type: number
}

/*封装审批校验*/
export interface Appuser {
  departmentId: string
  departmentName: string
  procApplyTime: number
  procCurrNodeUserId: string
  procCurrNodeUserName: string
  procData: string
  processId: string
  processKey: string
  processName: string
  processState: string
  timeOfEntry: number
  userId: string
  username: string
}

/*封装社保表格校验*/
export interface Security {
  username: string
  mobile: string
  workNumber: string
  departmentName: string
  timeOfEntry: string
  leaveTime: string
  providentFundCity: string
  participatingInTheCity: string
  socialSecurityBase: string
  providentFundBase: string
}

/*社保头部数据校验*/
export interface Sectopapi {
  code: string
  companyId: string
  createTime: null
  id: string
  introduce: string
  manager: string
  managerId: null
  name: string
  pid: string
}

/*封装考勤校验*/
export interface params {
  page: number
  pageSize: number
}
