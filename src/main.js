import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap"; //import the bootstrap installed via yarn
import "./assets/app.scss";
import jQuery from "jquery";
import "popper.js";
import { fb } from "./firebase";

window.$ = window.jQuery = jQuery;

Vue.component("Navbar", require("./components/Navbar.vue").default); //first parameter name of the vue file
// Vue.component("Hero", require("./components/Hero.vue").default);
// Vue.component("Product", require("./sections/Products.vue").default);
// Vue.component("Home", require("./views/Home.vue").default);

Vue.config.productionTip = false;

let app = "";
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
