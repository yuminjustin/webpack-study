import 'babel-polyfill'

import './commonCss'  // 公共 css
import 'A/css/mod1.css'  // 自己的 css

import Vue from 'vue'
import jsonp from 'vue-jsonp'
import Plugin from './plugin'  // 自定义 插件
import Mod1 from './App_mod1'  // 主vue组件

Vue.config.productionTip = false

Vue.use(jsonp)
Vue.use(Plugin)

/* eslint-disable no-new */
new Vue({
  el: '#mod',
  template: '<Mod1 />',
  components: { Mod1 }
})
