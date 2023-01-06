/*封装登录校验*/
export interface LoginForm {
  mobile: string
  password: string
}

/*封装权限表格校验*/
export interface User {
  name: string
  code: string
  description: string
}

/*封装权限表单校验*/
export interface Form {
  name: string
  code: string
  description: string
}

/*封装审批表格校验*/
export interface Appuser {
  date: string
  name: string
  address: string
  time: string
  address1: string
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
