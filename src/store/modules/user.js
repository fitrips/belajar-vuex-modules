import axios from "axios";

const users = {
    namespaced: true,
    state: {
        userData: [],
    },
    getters: {
        getUsers: (state) => state.userData,
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/users"
                );
                commit("SET_USERS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async createUsers({ commit }, userData) {
            try {
                const response = await axios.post(
                    "https://fakestoreapi.com/users",
                    userData
                );
                commit("ADD_USER", response.data);
                return response.data
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.userData = users;
        },
        SET_USERS(state, user) {
            state.userData.push = (user);
        },
    },
};

export default users;