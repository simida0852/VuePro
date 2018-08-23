import Vue from "vue"
import App from "./App.vue"
import echarts from "echarts"
import ElementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from 'vue-router'
import router from './router'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
