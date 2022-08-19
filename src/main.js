import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vueBus from '@/utils/vueBus';

Vue.config.productionTip = false
Vue.use(vueBus);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
