import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../admin/Admin.vue";
import Products from "../sections/Products.vue";
import Overview from "../admin/Overview.vue";
import Product from "../admin/Products.vue";
import Profile from "../admin/Profile.vue";
import Order from "../admin/Orders.vue";
import Checkout from "../views/Checkout.vue";
import { fb } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
        path: "product",
        name: "product",
        component: Product
      },
      {
        path: "order",
        name: "order",
        component: Order
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      }
    ]
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next("/");
  } else {
    if (requiresAuth && currentUser) {
      next();
    } else {
      next();
    }
  }
});

export default router;
