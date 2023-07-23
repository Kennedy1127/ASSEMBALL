import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //////////////////////////////////////////////////////
    // 通知、會員頁面、個人資料
    isNotifyVisible: 0,
    isMemberVisible: 0,
    isPersonalVisible: 0,
    //////////////////////////////////////////////////////
    // 商品區塊
    products: [],
    productsCount: 0,
    // selectedProductsText: "",
    // selectedProductsRole: -1,
    // selectedProductsExp: [],
    // selectedProductsArea: "",
    // selectedProductsDate: 0,
    productsCurPage: 1,

    //////////////////////////////////////////////////////
    // 招募文案區塊
    copywritings: [],
    copywritingsCount: 0,
    selectedCopywritingsText: "",
    selectedCopywritingsRole: -1,
    selectedCopywritingsExp: [],
    selectedCopywritingsArea: "",
    selectedCopywritingsDate: 0,
    copywritingsCurPage: 1,
    ///////////////////////////////////////////
    myplayerPopupsOpen: false,
    myplayerEditOpen: false,
    myplayerOverlay: true,
  },

  getters: {
    //////////////////////////////////////////////////////
    // 商品區塊
    // productsPages(_, getters) {
    //   const len = getters.filteredCopywritings.length;
    //   return len % 6 === 0 ? (len > 6 ? len / 6 : 1) : Math.ceil(len / 6);
    // },

    //////////////////////////////////////////////////////
    // 招募文案區塊
    // 招募初心者數量
    inexperencedCount(state) {
      return state.copywritings.filter(
        (copywriting) => copywriting.copywriting_exp === 0
      ).length;
    },

    // 招募新手數量
    entryCount(state) {
      return state.copywritings.filter(
        (copywriting) => copywriting.copywriting_exp === 1
      ).length;
    },

    // 招募老手數量
    intermediateCount(state) {
      return state.copywritings.filter(
        (copywriting) => copywriting.copywriting_exp === 2
      ).length;
    },

    // 經歷不拘數量
    freeCount(state) {
      return state.copywritings.filter(
        (copywriting) => copywriting.copywriting_exp === 3
      ).length;
    },

    // 如果文字搜尋條件符合或長度為0時，return true
    includedCopywritingsByText: (state) => (copywriting) => {
      if (!state.selectedCopywritingsText) return true;
      return copywriting.copywriting_title.includes(
        state.selectedCopywritingsText
      );
    },

    // 如果守備位置條件符合的話或為-1時，return true
    includedCopywritingsByRole: (state) => (copywriting) => {
      if (state.selectedCopywritingsRole < 0) return true;

      return state.selectedCopywritingsRole === copywriting.copywriting_role;
    },

    // 如果地區條件符合的話或為空字串、-1時，return true
    includedCopywritingsByArea: (state) => (copywriting) => {
      if (
        !state.selectedCopywritingsArea ||
        state.selectedCopywritingsArea === -1
      )
        return true;

      return state.selectedCopywritingsArea.includes(
        copywriting.copywriting_area
      );
    },

    // 如果經歷條件符合的話或長度為0時，return true
    includedCopywritingsByExp: (state) => (copywriting) => {
      if (state.selectedCopywritingsExp.length === 0) return true;

      return state.selectedCopywritingsExp.includes(
        copywriting.copywriting_exp
      );
    },

    // 過濾後的招募文案
    filteredCopywritings(state, getters) {
      return state.copywritings
        .filter((copywriting) => getters.includedCopywritingsByExp(copywriting))
        .filter((copywriting) =>
          getters.includedCopywritingsByRole(copywriting)
        )
        .filter((copywriting) =>
          getters.includedCopywritingsByArea(copywriting)
        )
        .filter((copywriting) =>
          getters.includedCopywritingsByText(copywriting)
        );
    },

    // 更具時間排序的招募文案
    dateSortedFilteredCopywritings(state, getters) {
      const copywritings = [...getters.filteredCopywritings];

      state.selectedCopywritingsDate
        ? copywritings.sort(
            (a, b) =>
              new Date(a.copywriting_date) - new Date(b.copywriting_date)
          )
        : copywritings.sort(
            (a, b) =>
              new Date(b.copywriting_date) - new Date(a.copywriting_date)
          );

      return copywritings;
    },

    // 招募文案的總頁數
    copywritingsPages(_, getters) {
      const len = getters.filteredCopywritings.length;
      return len % 6 === 0 ? (len > 6 ? len / 6 : 1) : Math.ceil(len / 6);
    },
  },

  mutations: {
    //////////////////////////////////////////////////////
    // 通知頁面切換
    NotifyToggle(state) {
      state.isNotifyVisible = !state.isNotifyVisible;
      state.isMemberVisible = false;
    },
    // 會員頁面切換
    MemberToggle(state) {
      state.isMemberVisible = !state.isMemberVisible;
      state.isNotifyVisible = false;
      state.isPersonalVisible = false;
    },
    // 會員 > 個人資料 頁面切換
    EnterPersonal(state) {
      state.isPersonalVisible = true;
      state.isMemberVisible = false;
    },
    // 個人資料 > 會員中心 頁面切換
    ReturnPage(state) {
      state.isPersonalVisible = false;
      state.isMemberVisible = true;
    },
    //////////////////////////////////////////////////////
    // 商品區塊
    // 取得商品數量
    setProductsCount(state, payload) {
      state.productsCount = payload;
    },

    // 取得商品
    setProducts(state, payload) {
      state.products = [...payload];
    },

    // // 更新商品搜尋條件
    // selectCopywritingsSearch(state, payload) {
    //   state.selectedCopywritingsText = payload.searchText;
    //   state.selectedCopywritingsRole = payload.role;
    //   state.selectedCopywritingsArea = payload.area;
    // },

    // // 更新商品過濾條件
    // selectCopywritingsExp(state, payload) {
    //   state.selectedCopywritingsExp = [...payload];
    // },

    // // 更新商品時間過濾條件
    // selectCopywritingsDate(state, payload) {
    //   state.selectedCopywritingsDate = payload;
    // },

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

    //////////////////////////////////////////////////////
    // 招募文案區塊
    // 取得招募文案數量
    setCopywritingsCount(state, payload) {
      state.copywritingsCount = payload;
    },

    // 取得招募文案
    setCopywritings(state, payload) {
      state.copywritings = [...payload];
    },

    // 更新招募文案搜尋條件
    selectCopywritingsSearch(state, payload) {
      state.selectedCopywritingsText = payload.searchText;
      state.selectedCopywritingsRole = payload.role;
      state.selectedCopywritingsArea = payload.area;
    },

    // 更新招募文案過濾條件
    selectCopywritingsExp(state, payload) {
      state.selectedCopywritingsExp = [...payload];
    },

    // 更新招募文案時間過濾條件
    selectCopywritingsDate(state, payload) {
      state.selectedCopywritingsDate = payload;
    },

    // 重製過濾器
    resetFiltersAndSearch(state) {
      state.selectedCopywritingsText = "";
      state.selectedCopywritingsRole = -1;
      state.selectedCopywritingsArea = "";
      state.selectedCopywritingsExp = [];
      state.selectedCopywritingsDate = 0;
    },

    // 招募文案頁碼切換
    copywritingsPrevPage(state) {
      state.copywritingsCurPage--;
    },
    copywritingsNextPage(state) {
      state.copywritingsCurPage++;
    },
    copywritingsGoToPage(state, payload) {
      state.copywritingsCurPage = payload;
    },
    resetCopywritingsCurPage(state) {
      state.copywritingsCurPage = 1;
    },
    ///////////////////////////////////////
    //我的球隊彈窗頁面切換
    myplayerPopupsToggle(state) {
      state.myplayerPopupsOpen = !state.myplayerPopupsOpen;
      // state.myplayerPopupsOpen = false;
    },
    ////////////////////////////////////////
    //我的球隊edit切換
    myplayerEditToggle(state) {
      state.myplayerEditOpen = !state.myplayerEditOpen;
    },
    ///////////////////////////////////////
    //我的球隊Ovelay切換
    myplayerOverlayToggle(state) {
      state.myplayerPopupsOpen = !state.myplayerPopupsOpen;
    },
  },

  actions: {
    // 撈商品數量
    async getProductsCount(context) {
      try {
        const res = await axios.get("http://localhost:3000/products");
        if (!res) throw new Error("Cannot fetch response");
        context.commit("setProductsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },

    // 撈商品資料
    async getProducts(context) {
      try {
        const res = await axios.get("http://localhost:3000/products");
        if (!res) throw new Error("Cannot fetch response");
        context.commit("setProducts", res.data);
      } catch (err) {
        console.error(err);
      }
    },

    // 撈招募文案數量
    async getCopywritingsCount(context) {
      try {
        const res = await axios.get("http://localhost:3000/copywritings");
        if (!res) throw new Error("Cannot fetch response");
        context.commit("setCopywritingsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },

    // 撈招募文案資料
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
