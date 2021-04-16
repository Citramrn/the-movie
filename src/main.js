import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/one.css';
import '@/assets/css/two.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import routes from '../src/index.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
import VueSlickCarousel from 'vue-slick-carousel'
Vue.component('VueSlickCarousel', VueSlickCarousel);
import "popper.js"
import jQuery from "jquery";
window.$ = window.jquery = jQuery

Vue.config.productionTip = false

new Vue({
      el: '#app',
      router: routes,
      render: h => h(App),
    }).$mount('#app')