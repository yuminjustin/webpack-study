import Vue from 'vue'
import axios from 'axios'
import tool from './tool'
import MD5 from 'A/api/md5.min'

/* 定义全局变量 */
export default {
    install(Vue) {
       Vue.prototype.$MD5 = MD5
        Vue.prototype.$axios = axios
        Vue.prototype.$tool = tool
    }
}
