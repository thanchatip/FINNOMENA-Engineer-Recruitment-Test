import Vue from 'vue'
import App from './App.vue'

import toThaiDateString from './filters/toThaiDateString'

Vue.config.productionTip = false

Vue.filter('toThaiDateString', toThaiDateString)

new Vue({
  render: h => h(App),
}).$mount('#app')
