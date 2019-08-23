/**
 * 包含多个接口处理函数
 */

import ajax from './ajax'

// 生产环境使用
// const baseURL = 'http://localhost:5000'
// 开发环境下配置了代理时 
  //  const baseURL = 'https://douban.uieee.com/v2/movie'
   const baseURL = 'https://douban-api.uieee.com/v2/movie'


//获取正在热映的电影
export const reqMovieList = (start=0,count=10) => ajax(baseURL+'//in_theaters',{start,count})


//获取电影详情
export const reqMovieDatail = (id) => ajax(baseURL+`/subject/${id}`)