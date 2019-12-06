<template>
  <div class="product" id="product">
    <div class="container">
      <h3 class="text-center p-5">Our Products List</h3>
      <div class="row">
        <div class="col-md-4 col-lg-3" v-for="product in products">
          <div class="card product-item">
            <Carousel
              class="slider"
              :perPage="1"
              :autoplay="true"
              :autoplayTimeout="2000"
            >
              <Slide class="slider" v-for="(image, index) in product.images">
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  width="100px"
                />
              </Slide>
            </Carousel>

            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { fb, db } from "../firebase";
export default {
  name: "ProductList",
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  data() {
    return {
      products: [],
      product: {
        product_name: null,
        price: null,
        tags: [],
        images: [],
        description: null
      },
      activeItem: null,
      tag: null,
      modal: null
    };
  },
  props: {},
  components: { Carousel, Slide }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
.product-item {
  height: 330px;
}
.card-title,
.card-text {
  text-align: justify;
  margin-top: -30px;
}

.card-body {
  text-align: left;
}
.card-img-top {
  height: 150px;
  width: 200px;
  margin-top: 20px;
}
</style>
