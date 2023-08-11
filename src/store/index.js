import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/user";
import berita from "./modules/berita";
import product from "./modules/product";
import kategori from "./modules/kategori";
import auth from "./modules/auth";
import notification from "./modules/notification";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        berita,
        product,
        kategori,
        auth,
        notification
    },
});

export default store;