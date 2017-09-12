import 'babel-polyfill'

import './commonCss'  // 公共css
import 'A/css/mod2css' // 自己的css

import Vue from 'vue'
import jsonp from 'vue-jsonp'
import Plugin from './plugin'  // 自定义插件
import Mod2 from './App_mod2'  //主vue组件

Vue.config.productionTip = false

Vue.use(jsonp)
Vue.use(Plugin)

/* eslint-disable no-new */
new Vue({
  el: '#mod',
  template: '<Mod2 />',
  components: { Mod2 }
})
