<!-- //導覽列 深淺色版 切換 -->
<template>
  <transition name="fade">
    <MainHeader
      v-if="MainHeader && shouldShowMainHeader"
      @toggle_notify="toggleNotify"
      @toggle_member="toggleMember"
      mode="out-in"
    />
  </transition>
  <transition name="fade">
    <MainHeaderLight
      v-if="MainHeaderLight && shouldShowMainHeaderLight"
      @toggle_notify="toggleNotify"
      @toggle_member="toggleMember"
    />
  </transition>
  <!-- 通知視窗頁面 -->

  <MemberNotify v-if="$store.state.isNotifyVisible" />

  <!-- 會員中心 > 個人資料頁面 -->
  <MemberPersonal
    v-if="$store.state.isPersonalVisible"
    @return_page="returnPage"
  />

  <!-- 會員中心頁面 & 登出按鈕事件-->
  <MemberCenter
    v-if="$store.state.isMemberVisible"
    @enter_personal="enterPersonal"
    @clear_userdata="clearUserData"
  />
  <router-view />
  <MainFooter v-if="shouldShowMainFooter" />

  <!-- Loading 畫面 -->
  <LoadingComponent v-if="$store.state.isPending" />
</template>

<style>
/* 導覽列 */
.fade-enter-active {
  animation: fade-in 0.3s;
}
.fade-leave-active {
  animation: fade-out 0.3s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainHeaderLight from "@/components/MainHeader_light.vue";
import MemberNotify from "@/components/MemberCenter/MemberNotify";
import MemberCenter from "@/components/MemberCenter/MemberCenter";
import MemberPersonal from "@/components/MemberCenter/MemberPersonal";
import MainFooter from "@/components/MainFooter.vue";
import LoadingComponent from "@/components/utilities/LoadingComponent.vue";
import { auth } from "@/firebase/config";
import getData from "@/composables/data/getData";

export default {
  computed: {
    shouldShowMainFooter() {
      // 在這裡列出你不想顯示 MainFooter 的頁面名稱
      const pagesWithoutFooter = ["Home", "HomeLoading", "Backstage", "test"];

      return !pagesWithoutFooter.includes(this.$route.name);
    },
    shouldShowMainHeader() {
      const pagesWithoutHeader = ["HomeLoading", "Backstage", "test"];

      return !pagesWithoutHeader.includes(this.$route.name);
    },
    shouldShowMainHeaderLight() {
      const pagesWithoutHeaderLight = ["HomeLoading", "Backstage", "test"];

      return !pagesWithoutHeaderLight.includes(this.$route.name);
    },
  },
  async beforeMount() {
    const {
      getUser,
      getDocument,
      getDocuments,
      getSubCollectionDocument,
      getSubCollectionDocuments,
    } = getData();
    // const testA = await getDocument("COPYWRITINGS", "UFX8L9SRpSRjXzgCwxHk");
    // const testB = await getDocuments("COPYWRITINGS");
    // console.log(testA);
    // console.log(testB);

    const testA = await getDocument("TEAMS", "5KhosRZOJ7TmLfECUb5D");
    const testB = await getDocuments("TEAMS");
    console.log(testA);
    console.log(testB);

    //----
    // const testSherry = await getDocuments("APPLYS");
    // console.log(testSherry);

    // const testC = await getSubCollectionDocument({
    //   collectionName: "TEAMS",
    //   documentId: "5KhosRZOJ7TmLfECUb5D",
    //   subCollectionName: "POST",
    //   subDocumentId: "Uud9BbmACZksHOBQeFC0",
    // });
    // const testD = await getSubCollectionDocuments({
    //   collectionName: "TEAMS",
    //   documentId: "5KhosRZOJ7TmLfECUb5D",
    //   subCollectionName: "PIC",
    // ----
    // const testSherry = await getDocuments("APPLYS");
    // console.log(testSherry);

    // const testC = await getSubCollectionDocument({
    //   collectionName: "PRODUCTS",
    //   documentId: "VHKTJGsrIOYXBTBxFR7e",
    //   subCollectionName: "COMMENTS",
    //   subDocumentId: "n8w5wpDDeGWujr8Aq8Kp",
    // });
    // const testD = await getSubCollectionDocuments({
    //   collectionName: "PRODUCTS",
    //   documentId: "VHKTJGsrIOYXBTBxFR7e",
    //   subCollectionName: "COMMENTS",
    // });
    // console.log(testC);
    // console.log(testD);
    // const testC = await getSubCollectionDocument({
    //   collectionName: "PRODUCTS",
    //   documentId: "VHKTJGsrIOYXBTBxFR7e",
    //   subCollectionName: "COMMENTS",
    //   subDocumentId: "n8w5wpDDeGWujr8Aq8Kp",
    // });
    // const testD = await getSubCollectionDocuments({
    //   collectionName: "PRODUCTS",
    //   documentId: "VHKTJGsrIOYXBTBxFR7e",
    //   subCollectionName: "COMMENTS",
    // });
    // console.log(testC);
    // console.log(testD);

    // 確認是不是手機使用
    if (window.innerWidth <= 420) {
      this.$store.state.isMobile = 1;
    }

    // 確認使用者登入狀態
    if (auth.currentUser && !this.$store.state.isLoggedIn) {
      this.$store.state.isLoggedIn = true;
      if (!this.$store.state.user) {
        this.$store.state.user = await getUser();
      }
    }
  },

  data() {
    return {
      // 導覽列顯示
      MainHeader: true,
      MainHeaderLight: false,
      // 通知視窗顯示
      isNotifyVisible: false,
      isMemberVisible: false,
      isPersonalVisible: false,
    };
  },
  components: {
    MainHeader,
    MainFooter,
    MainHeaderLight,
    MemberNotify,
    MemberCenter,
    MemberPersonal,
    LoadingComponent,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 導覽列切換
    handleScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollPosition > 40) {
        this.MainHeaderLight = true;
        this.MainHeader = false;
      } else {
        this.MainHeaderLight = false;
        this.MainHeader = true;
        //不顯示通知、會員頁面
        // this.$store.state.isNotifyVisible = false;
        // this.$store.state.isPersonalVisible = false;
        // this.$store.state.isMemberVisible = false;
      }
    },

    // 滾動到頂部的方法
    scrollToTopOnMobile() {
      if (window.innerWidth <= 420) {
        window.scrollTo(0, 0);
      }
    },

    //切換通知頁面
    toggleNotify() {
      if (!this.$store.state.isLoggedIn) {
        alert("還沒登入，跳轉到登入頁面喔~");
        this.$router.push("/login");
        this.scrollToTopOnMobile(); // 在跳轉後滾動到頂部
      } else {
        this.$store.commit("NotifyToggle");
      }
    },

    //切換會員頁面
    toggleMember() {
      if (!this.$store.state.isLoggedIn) {
        alert("還沒登入，跳轉到登入頁面喔~");
        this.$router.push("/login");
        this.scrollToTopOnMobile(); // 在跳轉後滾動到頂部
      } else {
        this.$store.commit("MemberToggle");
      }
    },

    //會員中心 > 個人資料頁面
    enterPersonal() {
      this.$store.commit("EnterPersonal");
    },

    //個人資料頁面返回 > 會員中心
    returnPage() {
      this.$store.commit("ReturnPage");
    },

    //清除會員資料
    clearUserData() {
      if (window.confirm("請問要登出帳號嗎？") == true) {
        try {
          // 清除 Vuex 中的會員狀態
          this.$store.commit("clearUserData");

          // 跳轉到登入頁面
          this.$router.push("/login");
        } catch (error) {
          console.error("登出時發生錯誤：", error);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
