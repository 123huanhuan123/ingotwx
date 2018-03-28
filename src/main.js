// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
//Vue.prototype.$http=axios
//axios.defaults.baseURL="http://apis.map.qq.com/ws/location/v1/ip?key=GTJBZ-PFQWK-LLRJ3-A5XUO-L77JT-7NB4A"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
