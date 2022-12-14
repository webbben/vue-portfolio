import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

const app = new Vue({
  vuetify,
  router,
  render: h => h(App)
})

app.$mount('#app')