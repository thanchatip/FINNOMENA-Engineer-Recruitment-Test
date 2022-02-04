import Vue from 'vue'
// import App from './App.vue'
import FundsList from './views/FundsList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(FundsList),
}).$mount('#app')
