<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h3 class="hero-title">Vue Shop for E-Commerce</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita autem eum ex neque ut repudiandae odio, officiis in eaque optio deserunt, ea harum nam accusantium perferendis ipsam eius cum dignissimos?</p>
            <div class="hero-btn mt-5">
              <button class="btn custom-btn btn-info mr-4">Explore</button>
              <button class="btn custom-btn btn-outline-secondary">Products</button>
            </div>  
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <img src="/img/svg/graphic.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>
