<template>
  <div class="addTocart">
    <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
  </div>
</template>

<style></style>

<script>
export default {
  name: "AddToCart",
  props: {
    // This should be the same of what is being passed from the binded variable in other components
    productId: String,
    productName: String,
    price: String,
    productImage: String
  },
  data() {
    return {
      item: {
        product_ID: this.productId,
        product_Name: this.productName,
        product_Price: this.price,
        product_Image: this.productImage,
        product_Quantity: 1
      }
    };
  },
  methods: {
    addToCart() {
      $("#MiniCart").modal("show");
      this.$store.commit("addToCart", this.item); //First parameter is the function you created in the store.js
    }
  }
};
</script>
