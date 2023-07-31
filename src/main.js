import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import App from './App.vue'
// import App from './components/Home.vue'


Vue.config.productionTip = false;

// import router from "./ruoter/router.js";
// import router from "./ruoter/index_综合案例.js";


import router from './ruoter/index.js'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

