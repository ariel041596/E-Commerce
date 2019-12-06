<template>
  <div class>
    <Navbar></Navbar>
    <MiniCart />
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4 text-left">Check-out Items</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" class="media">
              <img
                :src="item.product_Image"
                alt
                width="120px"
                class="align-self-center"
              />
              <div class="media-body col-md-6">
                <div>
                  <h6 class="mt-0">{{ item.product_Name }}</h6>
                  <span>
                    <i
                      @click="$store.commit('removeItemFromCart', item)"
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
        <div class="col-md-4">
          <p class="py-4 text-left">Total Price</p>
          <card
            class="stripe-card"
            :class="{ complete }"
            stripe="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"
            :options="stripeOptions"
            @change="complete = $event.complete"
          />

          <button
            class="pay-with-stripe btn btn-primary mt-4"
            @click="pay"
            :disabled="!complete"
          >
            Pay with credit card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, createToken } from "vue-stripe-elements-plus";
export default {
  name: "Checkout",
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    };
  },
  components: { Card },
  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token));
    }
  }
};
</script>

<style lang="scss" scoped>
.product-image {
  margin-right: 50px;
}
.remove-cart {
  float: right;
  margin-top: -30px;
}

// Stripe CSS
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
