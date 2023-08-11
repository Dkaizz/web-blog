export interface SubCreate {
  name: string,
  email: string,
  createdAt: string
}

export interface SubVM extends SubCreate{
  id:number
}
