import axios from "axios";
// import { ElMessage } from "element-plus"


const $http = axios.create({
    // baseURL: "https://admin.cdzkzs.top",
    // baseURL: 'http://192.168.31.115:8080',
    baseURL:'https://www.fastmock.site/mock/e05b308492de13e377b2549fb3cb8b8c/news',
    timeout:5000,
    headers:{
       'Content-Type':'application/json;charset=utf-8' 
    }
})
// 请求拦截
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    const token = localStorage.getItem('token')
    if(token){
       config.headers.Authorization = localStorage.getItem('token') || ''
    }
    return config
})
// 请求响应
$http.interceptors.response.use(res => {
    const code:number = res.data.code
    if(code != 200){
        // ElMessage.error(res.data.msg) 
    }
    return res.data
},err=>{
    console.log(err);
    
})

export default $http


