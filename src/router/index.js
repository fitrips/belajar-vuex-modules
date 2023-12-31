import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/Index.vue";
import UserCreate from "../views/user/Create.vue";
import Berita from "../views/Berita.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import store from "../store";
import FilterPageKategori1 from "../views/FilterPageKategori1.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
        meta: { requiresLogin: true ,}
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
        meta: { requiresLogin: true ,}
    },
    {
        path: "/berita",
        name: "Berita",
        component: Berita,
    },
    {
        path: "/produk",
        name: "Product",
        component: Product,
    },
    {
        path: "/produk/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/kategori",
        name: "Category",
        component: Category,
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterPageKategori1,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true ,}
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(( to, from, next ) => {
    if(to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
       next("/");
    } else {
        next();
    }
});
router.beforeEach(( to, from, next ) => {
    if(to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
       next("/login");
    } else {
        next();
    }
});

export default router;