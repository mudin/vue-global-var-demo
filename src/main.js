import Vue from 'vue';
import VueGlobalVar from 'vue-global-var';
import App from './App.vue';
import User from './model/User';

Vue.config.productionTip = false;

Vue.use(VueGlobalVar, {
  // store,
  globals: {
    $user: new User('user1'),
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
