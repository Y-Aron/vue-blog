
export default ({ app, $axios, redirect} ) => {

  // 请求拦截器
  $axios.onRequest(config => {


    return config
  })

  // 响应拦截器
  $axios.onResponse(resp => {
    return resp
  })
}
