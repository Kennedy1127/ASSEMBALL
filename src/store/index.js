import { createStore } from "vuex";
import axios from "axios";
import getData from "@/composables/data/getData";

const { getDocuments, getSubCollectionDocuments } = getData();

export default createStore({
  state: {
    //////////////////////////////////////////////////////
    // 確認是否為手機用戶
    isMobile: 0,

    // 讀取中
    isPending: false,

    //////////////////////////////////////////////////////
    // 確認是否登入
    isLoggedIn: false,

    // 會員資料
    user: null,

    // 通知資料
    userNotifies: [],

    // 歷史訂單
    userOrders: [],

    // 通知、會員頁面、個人資料開關
    isNotifyVisible: 0,
    isMemberVisible: 0,
    isPersonalVisible: 0,

    //////////////////////////////////////////////////////
    // 首頁區塊
    homeNews: [],
    homeTeams: [],
    homeCopywritings: [],
    homeProducts: [],

    //////////////////////////////////////////////////////
    // 商品區塊
    products: [],
    selectedProductsText: "",
    selectedProductsTag: 0,
    selectedProductsDate: -1,

    //////////////////////////////////////////////////////
    //會員中心區塊
    memberCenter: [],
    Createteam: [],

    //////////////////////////////////////////////////////
    // 招募文案區塊
    copywritings: [],
    copywritingsCount: 0,
    selectedCopywritingsText: "",
    selectedCopywritingsRole: -1,
    selectedCopywritingsExp: [],
    selectedCopywritingsArea: "",
    selectedCopywritingsDate: 0,
    //----球隊徵人招募-後台
    ManageCopywritings: [],
    ApplyRecords: [],

    ///////////////////////////////////////////
    // 我的球隊區塊
    myplayerPopupsOpen: false,

    myplayerEditOpen: false,
    myplayerOverlay: true,
    myplayerTeam: {},

    //////////////////////////////////////////////////////
    // 頁碼區塊
    productsCurPage: 1,
    copywritingsCurPage: 1,
    curPage: 1,
  },

  getters: {
    //////////////////////////////////////////////////////
    // 商品區塊
    // 如果文字搜尋條件符合或長度為0時，return true
    includedProductsByText: (state) => (product) => {
      if (!state.selectedProductsText) return true;
      return product.title.includes(state.selectedProductsText);
    },

    // 如果商品TAG符合或為-1時，return true
    includedCProductsByTag: (state) => (product) => {
      if (state.selectedProductsTag === 0) return true;
      return state.selectedProductsTag === product.tag;
    },

    // 過濾後的商品
    filteredProducts(state, getters) {
      return state.products
        .filter((product) => getters.includedProductsByText(product))
        .filter((product) => getters.includedCProductsByTag(product));
    },

    // 更具時間排序的商品
    dateSortedFilteredProducts(state, getters) {
      const products = [...getters.filteredProducts];
      state.selectedProductsDate
        ? products.sort(
            (a, b) => new Date(b.date.toDate()) - new Date(a.date.toDate())
          )
        : products.sort(
            (a, b) => new Date(a.date.toDate()) - new Date(b.date.toDate())
          );
      return products;
    },

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

    //會員中心區塊

    //取得會員資料
    setMemberCenter(state, payload) {
      console.log(payload);
      state.memberCenter = { ...payload }; //payload:要運送出來的東西
    },

    // //取得創立球隊資料
    // setCreateteam(state, payload) {
    //   console.log([...payload]);
    //   state.Createteam = [...payload]; //payload:要運送出來的東西
    // },

    //////////////////////////////////////////////////////
    // 首頁區塊

    // 取得首頁最新消息
    setHomeNews(state, payload) {
      state.homeNews = [...payload];
    },

    // 取得首頁球隊
    setHomeTeams(state, payload) {
      state.homeTeams = [...payload];
    },

    // 取得首頁球員招募
    setHomeCopywritings(state, payload) {
      state.homeCopywritings = [...payload];
    },

    // 取得首頁top 3商品
    setHomeProducts(state, payload) {
      state.homeProducts = [...payload];
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

    // 更新商品搜尋條件
    selectProductsSearch(state, payload) {
      state.selectedProductsText = payload.searchText;
      state.selectedProductsDate = payload.selectedDate;
    },

    // 更新商品TAG過濾條件
    selectProductsTag(state, payload) {
      state.selectedProductsTag = payload;
    },

    resetProductsFilterAndTag(state) {
      state.selectedProductsText = "";
      state.selectedProductsDate = -1;
      state.selectedProductsTag = 0;
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

    // 後台-招募文案區塊
    // 1. 取得後台-招募文案數量
    setManageCopywritings(state, payload) {
      state.ManageCopywritings = [...payload]; //payload:要運送出來的東西
    },
    // 2. 取得後台-應徵數量
    setApplyRecords(state, payload) {
      state.ApplyRecords = [...payload]; //payload:要運送出來的東西
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

    //我的球隊撈資料
    setMyplayerTeam(state, payload) {
      console.log(payload);

      state.myplayerTeam = { ...payload };
    },

    ///////////////////////////////////////
    // 頁碼區塊
    paginationPrevPage(state, payload) {
      // state[`${payload}CurPage`]--;
      state.curPage--;
    },
    paginationNextPage(state, payload) {
      // state[`${payload}CurPage`]++;
      state.curPage++;
    },
    paginationGoToPage(state, payload) {
      // state[`${payload.type}CurPage`] = payload.num;
      state.curPage = payload.num;
    },
    resetPaginationCurPage(state, payload) {
      // state[`${payload}CurPage`] = 1;
      state.curPage = 1;
    },
  },

  actions: {
    // 撈首頁跑馬燈資料
    async getHomeMarquee(context) {
      try {
        const res = await getDocuments("MARQUEE");
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    // 撈首頁NEWS資料
    async getHomeNews(context) {
      try {
        const res = await getDocuments("NEWS");
        return res;
      } catch (err) {
        console.error(err);
      }
    },

    async getHomeTeams(context) {
      try {
        const res = await axios.get("http://localhost:3000/home_teams");
        if (!res) throw new Error("Cannot fetch response");
        // console.log(res);
        // context.commit("setProductsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },

    async getHomeCopywritings(context) {
      try {
        const res = await axios.get("http://localhost:3000/home_copywritings");
        if (!res) throw new Error("Cannot fetch response");
        // console.log(res);
        // context.commit("setProductsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },

    async getHomeProducts(context) {
      try {
        const res = await axios.get("http://localhost:3000/home_products");
        if (!res) throw new Error("Cannot fetch response");
        // console.log(res);
        // context.commit("setProductsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },

    ///////////////////////////////////////
    // 撈商品資料
    async getProducts(context) {
      try {
        const res = await getDocuments("PRODUCTS");
        const products = [];
        for (let i = 0; i < res.length; i++) {
          const comments = await getSubCollectionDocuments(
            {
              collectionName: "PRODUCTS",
              documentId: res[i].id,
              subCollectionName: "COMMENTS",
            },
            [],
            ["date"]
          );
          products.push({ ...res[i], comments });
        }

        context.commit("setProducts", products);
      } catch (err) {
        console.error(err);
      }
    },

    ///////////////////////////////////////

    // 撈會員中心 會員資料
    // async getMemberCenter(context) {
    //   try {
    //     const res = await getDocuments("MEMBERS");
    //     context.commit("setMemberCenter", res);
    //     // console.log(res);
    //     // const allMembers = await getDocuments("MEMBERS");
    //     // const user = await getUser();
    //     // const userMemberData = allMembers.find(
    //     //   (member) => member.id === user.id
    //     // );
    //     // if (userMemberData) {
    //     //   context.commit("setMemberCenter", userMemberData);
    //     // } else {
    //     //   console.error("User data not found in MEMBERS collection.");
    //     // }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    // 撈會員中心 資料
    async getMemberCenter(context, payload) {
      const memberDate = await getDocuments("MEMBERS");
      console.log(memberDate);

      const memberTeamDate = await getSubCollectionDocuments({
        collectionName: "MEMBERS",
        documentId: "eyOD2XSBfUVTXMQRVIKFVQxbKqn2",
        subCollectionName: "CREATETEAM",
        subDocumentId: "tZ6DGqZezEds1tc7uapu",
      });
      console.log(memberTeamDate);

      const allMemberDate = {
        ...memberDate[0],
        memberTeamDate,
      };
      // console.log(allTeamData);

      context.commit("setMemberCenter", allMemberDate);
    },

    // 撈訂單管理
    async getProductManage(context, payload) {
      try {
        const res = await getSubCollectionDocuments(payload);
        if (!res) throw new Error("Cannot fetch response");
        return res;
      } catch (err) {
        console.error(err);
      }
    },

    // // 撈會員中心訂單資料
    // async getMemberCenterOrderManage(context) {
    //   try {
    //     const res = await axios.get("http://localhost:3000/member_order");
    //     if (!res) throw new Error("Cannot fetch response");
    //     context.commit("setMemberCenterOrderManage", res.data); //setManageCopywritings: 寫在mutation裡面
    //     // context.commit("setCopywritingsCount", res.data.length);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    ///////////////////////////////////////

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

    //撈我的球隊的資料

    async getMyplayerTeam(context, payload) {
      const teamData = await getDocuments("TEAMS");
      // console.log(teamData);

      const teamGameData = await getSubCollectionDocuments({
        collectionName: "TEAMS",
        documentId: "5KhosRZOJ7TmLfECUb5D",
        subCollectionName: "GAME",
      });
      // console.log(teamGameData);

      //const picData=

      const scheduleData = await getSubCollectionDocuments({
        collectionName: "TEAMS",
        documentId: "5KhosRZOJ7TmLfECUb5D",
        subCollectionName: "SCHEDULE",
      });
      // console.log(scheduleData);

      const teamPostData = await getSubCollectionDocuments({
        collectionName: "TEAMS",
        documentId: "5KhosRZOJ7TmLfECUb5D",
        subCollectionName: "POST",
      });
      // console.log(teamPostData);

      const allTeamData = {
        ...teamData[0],
        teamGameData,
        scheduleData,
        teamPostData,
      };
      // console.log(allTeamData);

      context.commit("setMyplayerTeam", allTeamData);
      return allTeamData;
    },

    // 撈後台-招募文案資料
    async getManageCopywritings(context) {
      try {
        // const res = await axios.get(
        //   "http://localhost:3000/candidate-copywritings"
        // );
        // get;
        // if (!res) throw new Error("Cannot fetch response");
        const res = await getDocuments("COPYWRITINGS");
        context.commit("setManageCopywritings", res); //setManageCopywritings: 寫在mutation裡面
        // context.commit("setCopywritingsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },
    // 撈後台-應徵紀錄資料
    async getApplyRecords(context) {
      try {
        // const res = await axios.get("http://localhost:3000/candidate-apply");
        // if (!res) throw new Error("Cannot fetch response");
        const res = await getDocuments("APPLYS");
        context.commit("setApplyRecords", res); //setManageCopywritings: 寫在mutation裡面
        // context.commit("setCopywritingsCount", res.data.length);
      } catch (err) {
        console.error(err);
      }
    },
  },

  modules: {},
});
