import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from '@/store/store.js';
import VueRouter from 'vue-router';

import Messages from '@/components/Messages';
import NewMessage from '@/components/NewMessage';
import DetailMessage from '@/components/DetailMessage';
import Register from '@/components/Register';
import Login from '@/components/Login';

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: Messages
  },
  {
    path: "/newmessage", component: NewMessage
  },
  {
    path: "/detailmessage/:id", component: DetailMessage
  },
  {
    path: "/register", component: Register
  },
  {
    path: "/login", component: Login
  }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
