<template>
  <div class="product">
    <div class="container">
      <h3 class="text-center">Orders</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="/img/products/product1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Surface Book 2</h5>
              <p class="card-text">
                Complete your device with Office 365 and get 1TB cloud storage,
                Excel, Word, PowerPoint & more. Select your suite during
                checkout.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="/img/products/product2.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Surface Laptop 2</h5>
              <p class="card-text">
                Style and speed. Go beyond the traditional with new Surface
                Laptop 2. Featuring improved performance and the full Windows 10
                Home experience.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="/img/products/product3.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Surface Studio 2</h5>
              <p class="card-text">
                The ultimate creative studio. Let your ideas flow with brilliant
                color, blazing graphics, faster processors, intuitive tools, and
                a stunning, adjustable 28” display.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="product-test">
        <hr />
        <h3 class="d-inline-block">Product List</h3>
        <button @click="addNew()" class="btn btn-primary float-right">
          Add Product
        </button>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products">
                <td>{{ product.product_name }}</td>
                <td>{{ product.price }}</td>
                <td>
                  <button class="btn btn-primary" @click="editProduct(product)">
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    @click="deleteProduct(product)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">
              Edit Product
            </h5>
            <h5 class="modal-title" id="editLabel" v-if="modal == 'new'">
              Add Product
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    v-model="product.product_name"
                    type="text"
                    placeholder="Product Name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    v-model="product.price"
                    type="number"
                    placeholder="Product price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    @keyup.188="addTag"
                    v-model="tag"
                    type="text"
                    placeholder="Product tags"
                    class="form-control"
                  />
                  <div class="d-flex">
                    <p v-for="tag in product.tags">
                      <span class="p-1">{{ tag }}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group text-left">
                  <label for="product_image">Product Images</label>
                  <input
                    type="file"
                    @change="uploadImage"
                    class="form-control"
                  />
                </div>
                <div class="form-group d-flex">
                  <div class="p-1" v-for="(image, index) in product.images">
                    <div class="img-wrapp">
                      <img :src="image" alt width="80px" />
                      <span
                        class="delete-img"
                        @click="deleteImage(image, index)"
                        >X</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addProduct()"
              v-if="modal == 'new'"
            >
              Save changes
            </button>
            <button
              @click="updateProduct()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'edit'"
            >
              Apply changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import { VueEditor } from "vue2-editor";
export default {
  name: "Order",
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
  components: { VueEditor },
  methods: {
    reset() {
      this.product = {
        product_name: null,
        price: null,
        tags: [],
        images: [],
        description: null
      };
    },
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index, 1);
      image
        .delete()
        .then(() => {
          console.log("image deleted");
        })
        .catch(error => {
          console.log(error);
        });
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        //might be helpful for batch upload in laravel using vuejs
        let file = e.target.files[0];
        // var storageRef = fb
        //   .storage()
        //   .ref("products/" + Math.random() + "_" + file.name);
        var storageRef = fb
          .storage()
          .ref("products/" + Math.random() + "_" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.product.images.push(downloadURL);
            });
          }
        );
      }
    },
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    addNew() {
      this.modal = "new";
      this.reset();
      $("#product").modal("show");
    },
    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      $("#product").modal("hide");
      Toast.fire({
        icon: "success",
        title: "Updated item succesfully"
      });
    },
    editProduct(product) {
      this.modal = "edit";
      $("#product").modal("show");
      this.product = product;
      // this.activeItem = product[".key"];
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.products.doc(doc.id).delete();
          // this.$firestore.products.doc(doc[".key"]).delete();
          console.log(key);
          Toast.fire({
            icon: "success",
            title: "Your file has been deleted"
          });
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products
        .add(this.product)
        .then(() => {
          $("#product").modal("hide");
        })
        .catch(error => {
          console.log(error);
        });
    },
    clear() {
      // Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -15px;
  left: 75px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
.product {
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
