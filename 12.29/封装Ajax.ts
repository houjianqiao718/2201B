// 实例化ajax核心方法
// 原生ajax方法
let ajax = new XMLHttpRequest()
//建立连接 open(请求方式，请求连接，同步或者异步)
ajax.open('get','https://api-hmugo-web,itheima.net/api/public/v1/home/swiperdata')
// 发送请求
ajax.send()
// ajax状态判断
ajax.onreadystatechange = function(){
    if(ajax.status==200 && ajax.readyState==4){
        console.log(ajax.response);
    }
}

/**封装成一个函数*/
// function ajaxGet(methods, url) {
//     // 实例化ajax核心方法
//     // 原生ajax方法
//     let ajax = new XMLHttpRequest()
//     //建立连接 open(请求方式，请求连接，同步或者异步)
//     ajax.open('methods','url')
//     // 发送请求
//     ajax.send()
//     // ajax状态判断
//     ajax.onreadystatechange = function(){
//         if(ajax.status == 200 && ajax.readyState == 4){
//             console.log(ajax.response);
//         }
//     }
// }

/***使用接口*/
interface Params {
    methods: string,
    url: string
}
// 枚举类型
enum CODE {
    SUCCESS = 200,
    READY = 4
}
function ajaxGet(methods: Params["methods"], url: Params["url"]) {
    // 实例化ajax核心方法
    // 原生ajax方法
    let ajax = new XMLHttpRequest()
    //建立连接 open(请求方式，请求连接，同步或者异步)
    ajax.open('methods','url')
    // 发送请求
    ajax.send()
    // ajax状态判断
    ajax.onreadystatechange = function(){
        if(ajax.status == CODE.SUCCESS && ajax.readyState == CODE.READY){
            console.log(ajax.response);
        }
    }
}