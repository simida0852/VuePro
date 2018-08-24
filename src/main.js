import Vue from "vue"
import App from "./App.vue"
import echarts from "echarts"
import ElementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from 'vue-router'
import router from './router'
import Axios from 'axios'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.use(Axios)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
