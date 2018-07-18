import axios from 'axios';
import Vue from 'vue';
import api from './api'
import router from '../router/index'

var xhr = axios.create({
  baseURL: 'http://14.yaojunrong.com/api/',
  timeout: 5000,
  withCredentials:true,
  headers:{'Content-Type':'application/json;charset=UTF-8'}
});

var $axios = {
  get: function(url, params,config) {
    return new Promise((resolve, reject) => {
      xhr.get(api[url], {params: params,config}).then(res => {
        if(res.data.isLogin == false){
          alert("登陆失败");
          router.push("/login");
        }
        resolve(res.data)
      }).catch(err=>{
        console.log(err)
        reject(err)
      })
    })
  },
 post: function(url, params) {
    return new Promise((resolve, reject) => {
      xhr.post(api[url], params).then(res => {
        if(res.data.isLogin == false){
          alert("登陆失败");
          router.push("/login");
        }
        resolve(res.data)
      }).catch(err=>{
        console.log(err)
        reject(err)
      })
    })
  },

}

Vue.prototype.$axios = $axios;
