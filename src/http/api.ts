import $http from "./index"


export const goodsDetail = (data:{id:string}) => $http({
    url:"/goods/details",
    method:"GET",
    params:data
})
export const goodsList = () => $http({
    url:"/goods/goodsList",
    method:"GET",
})
export const goodsInfo = () => $http({
    url:"/goods/classify",
    method:"GET",
})
export const muneApi = () => $http({
    url:"/api/mune",
    method:"GET",
 })