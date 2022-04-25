import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  easing: "ease-in-out",
})

import './assets/css/index.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
