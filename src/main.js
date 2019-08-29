import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
