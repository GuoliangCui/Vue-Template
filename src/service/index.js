import axios from "axios";
const baseUrl = process.env.VUE_APP_BASE_API;
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000
});

//请求过滤器配置
instance.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
//响应过滤器配置
instance.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        return Promise.reject(err);
    }
);

//用户相关
const UserService = {
    getUserList: params => {
        return instance.get(`${baseUrl}/user/getuserlist`, { params: params });
    },

    getUserInfo: params => {
        return instance.get(`${baseUrl}/user/getuserinfo`, { params: params });
    }
}

//登陆
const LoginService = {
    getUserList: params => {
        return instance.get(`${baseUrl}/user/getuserlist`, { params: params });
    },

    getUserInfo: params => {
        return instance.get(`${baseUrl}/user/getuserinfo`, { params: params });
    }
}

export {
    UserService,
    LoginService
}
