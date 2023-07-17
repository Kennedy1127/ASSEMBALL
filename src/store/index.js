import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    productsCurPage: 1,

    copywritings: [],
    copywritingsCurPage: 1,
  },
  getters: {
    // copywritingsIncludedByInexperienced(state) {
    //   return state.copywritings.filter((el) => el.copywriting_exp === 0);
    // },

    // copywritingsIncludedByEntry(state) {
    //   return state.copywritings.filter((el) => el.copywriting_exp === 1);
    // },

    // copywritingsIncludedByIntermediate(state) {
    //   return state.copywritings.filter((el) => el.copywriting_exp === 2);
    // },

    copywritingsFilteredBy(state) {
      return state.copywritings.filter((el) => {
        return el;
      });
    },
  },
  mutations: {
    // 商品頁碼切換
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

    // 更新招募文案數量
    setCopywritings(state, payload) {
      state.copywritings = [...payload];
    },

    // 招募頁碼切換
    copywritingsPrevPage(state) {
      state.copywritingsCurPage--;
    },
    copywritingsNextPage(state) {
      state.copywritingsCurPage++;
    },
    copywritingsGoToPage(state, payload) {
      state.copywritingsCurPage = payload;
    },
    reseCopywritingsPage(state) {
      state.copywritingsCurPage = 1;
    },
  },

  actions: {
    async getCopywritings(context) {
      try {
        const res = await axios.get("http://localhost:3000/copywritings");
        if (!res) throw new Error("Cannot fetch response");
        context.commit("setCopywritings", res.data);
      } catch (err) {
        console.error(err);
      }
    },
  },

  modules: {},
});
