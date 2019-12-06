import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap"; //import the bootstrap installed via yarn
import "./assets/app.scss";
import jQuery from "jquery";
import "popper.js";
import { fb } from "./firebase";
import "./quasar";
import VueFirestore from "vue-firestore";
import Swal from "sweetalert2";
import VueCarousel from "vue-carousel";
import Vue2Filters from "vue2-filters";
import store from "./store";

Vue.use(VueCarousel);
Vue.use(Vue2Filters);
Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
});
Vue.use(VueFirestore);

window.$ = window.jQuery = jQuery;
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
window.Toast = Toast;

Vue.component("Navbar", require("./components/Navbar.vue").default); //first parameter name of the vue file
Vue.component("AddToCart", require("./components/AddToCart.vue").default); //first parameter name of the vue file
Vue.component("MiniCart", require("./components/MiniCart.vue").default); //first parameter name of the vue file
// Vue.component("Hero", require("./components/Hero.vue").default);
// Vue.component("Product", require("./sections/Products.vue").default);
// Vue.component("Home", require("./views/Home.vue").default);

Vue.config.productionTip = false;

let app = "";
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
