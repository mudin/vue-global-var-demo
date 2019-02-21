import Vue from 'vue';
import VueGlobalVariable from 'vue-global-variable';
import App from './App.vue';
import User from './model/User';

Vue.config.productionTip = false;

Vue.use(VueGlobalVariable, {
  // store,
  globals: {
    user: new User('user1'),
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
