import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './http'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$http = http

Vue.use(Element)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
