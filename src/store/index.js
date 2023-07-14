import { createStore } from "vuex";

export default createStore({
  state: {
    productsCurPage: 1,
  },
  getters: {},
  mutations: {
    productsPrevPage(state) {
      state.productsCurPage--;
    },
    productsNextPage(state) {
      state.productsCurPage++;
    },
    productsGoToPage(state, payload) {
      state.productsCurPage = payload;
    },
    resetProductsCurPage(state) {
      state.productsCurPage = 1;
    },
  },
  actions: {},
  modules: {},
});
