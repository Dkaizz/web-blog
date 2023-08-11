export interface BlogPostCreate{
  category: number,
  content: string,
  excerpt: string,
  img: string  ,
  permalink: string
  title:string,
  view:number,
  createdAt:string,
  status:string
}

export interface BlogPostVM extends BlogPostCreate{
  id:number
}
