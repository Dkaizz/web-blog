export interface CategoryCreate{
  name:string,
  createdAt:string
}

export interface CategoryVM extends CategoryCreate{
  id:number
}
