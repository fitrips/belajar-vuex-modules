import axios from "axios";

const products = {
    namespaced: true,
    state: {
        productData: [],
    },
    getters: {
        getProducts: (state) => state.productData,
        // get single product
        getProductById: (state) => (productId) => {
            console.log("ProductId:", productId);
            console.log("ProductData:", state.productData);
            const product = state.productData.find((p) => p.id == productId);
            console.log("Product:", product);
            return product;
        },

        // get filter product
        getProductByCategory: (state) => (productCategory) => {
            const product = state.productData.filter(
                (p) => p.category == productCategory
            );
            return product;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                commit("SET_PRODUCTS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        // get single product
        async fetchSingleProduct({ commit }, productId) {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products/${productId}'
                );
                commit("SET_SINGLE_PRODUCT", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchFilterProduct({ commit }, productCategory) {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products/category/${productCategory}'
                );
                commit("SET_FILTER_PRODUCT", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUCTS(state, product) {
            state.productData = product;
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.singleProduct = product;
        },
        SET_FILTER_PRODUCT(state, product) {
            state.filterProduct = product;
        },
    },
};

export default products;