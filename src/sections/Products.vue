<template>
  <div class="product" id="product">
    <div class="container">
      <h3 class="text-center p-5">Our Products</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Surface Book 2</h5>
              <p
                class="card-text"
              >Complete your device with Office 365 and get 1TB cloud storage, Excel, Word, PowerPoint & more. Select your suite during checkout.</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Surface Laptop 2</h5>
              <p
                class="card-text"
              >Style and speed. Go beyond the traditional with new Surface Laptop 2. Featuring improved performance and the full Windows 10 Home experience.</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Surface Studio 2</h5>
              <p
                class="card-text"
              >The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "Product",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
.card-title,
.card-text {
  text-align: justify;
}

.card-body {
  text-align: left;
}
</style>
