<template>
  <div class="mini-cart">
    <div
      class="modal fade"
      id="MiniCart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Shop</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="item in this.$store.state.cart" class="media">
                <img :src="item.product_Image" alt width="80px" class="align-self-center" />
                <div class="media-body col-md-6">
                  <div>
                    <h6 class="mt-0">{{ item.product_Name }}</h6>
                    <span>
                      <i
                        @click="$store.commit('removeItemFromCart',item)"
                        class="fas fa-times remove-cart"
                      ></i>
                    </span>
                  </div>
                  <p class="mt-0">
                    {{
                    item.product_Price
                    | currency("₱", 2, { decimalSeparator: "." })
                    }}
                  </p>
                  <p class="mt-0">Quantity: {{ item.product_Quantity }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
            <button @click="closemodal()" to="/checkout" class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "MiniCart",
  data() {
    return {};
  },
  methods: {
    closemodal() {
      $("#MiniCart").modal("hide");
      this.$router.push("/checkout");
    }
  }
};
</script>

<style lang="scss" scoped>
// .media-body {
//   margin-left: -150px;
// }
.remove-cart {
  float: right;
  margin-top: -30px;
}
</style>
