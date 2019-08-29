import Vue from 'vue'
import App from './App.vue'

import yaxh from "yaxh";
import 'yaxh/lib/yaxh.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
