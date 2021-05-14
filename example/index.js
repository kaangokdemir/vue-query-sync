import Vue from 'vue'
import App from './App.vue'
import VueQuerySync from '../dist'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueQuerySync)

const router = new VueRouter({
  mode: 'history',
})

new Vue({ render: (createElement) => createElement(App), router }).$mount(
  '#app'
)
