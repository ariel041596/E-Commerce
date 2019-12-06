import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let cart = window.localStorage.getItem("cart");
export default new Vuex.Store({
  //   state management concept is like the data(){} function in Vuejs that has a return
  state: {
    cart: cart ? JSON.parse(cart) : []
  },
  //   It is the same as methods:{} funtion in VueJs
  mutations: {
    //   It will accept a two parameter 1st state and second is the data from the Add to Cart
    addToCart(state, item) {
      let found = state.cart.find(
        product => product.product_ID == item.product_ID
      );
      if (found) {
        found.product_Quantity++;
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart)); //first parameter is any key string
    },
    removeItemFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
      this.commit("saveData");
    }
  }
});
