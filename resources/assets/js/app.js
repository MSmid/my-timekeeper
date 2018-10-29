
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue'

Vue.config.devtools = false;
Vue.config.performance = true;

import App from './components/App.vue';

import store from './store'
import BootstrapVue from 'bootstrap-vue';

const app = new Vue({
  el: '#main',
  store,
  components: {
    app: App
  },
  // render: h => h(App)
});

// app.use(BootstrapVue);