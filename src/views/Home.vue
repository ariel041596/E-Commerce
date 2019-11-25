<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Product />
    <Login></Login>
    <div class="container h-100">
      <div class="row p-5 h-100">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
          <div>
            <button class="btn custom-btn btn-outline-primary mr-4">Browser Products</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Product from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: { Hero, Product, Login }
};
</script>
