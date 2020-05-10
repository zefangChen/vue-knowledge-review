import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store'
import router from './router'

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
