import axios from "axios";
// 引入element设置全局loading
// import { Loading, Message } from 'element-ui'

axios.defaults.baseURL = "/api";

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    // loadinginstace = Loading.service({ fullscreen: true });
    if (sessionStorage.getItem("token")) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  err => {
    // loadinginstace.close();
    // Message.error({
    //   message: "加载超时"
    // });
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  res => {
    // 响应成功关闭loading
    // loadinginstace.close();、
    // 错误码
    switch (response.data.code) {
      case 1: {
        console.log(res);
        break;
      }
      case 2: {
        console.log(res);
        break;
      }
    }
    return res;
  },
  error => {
    // loadinginstace.close();
    // Message.error({
    //   message: "加载失败"
    // });
    return Promise.reject(error);
  }
);
export default axios;
