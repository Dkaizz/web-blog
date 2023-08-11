export interface UserLogin{
  userName:string,
  passWord:string,
}

export interface UserCreate extends UserLogin{
  createdAt:string,
  displayName:string
}

export interface UserVM extends UserCreate{
  id:number
}
