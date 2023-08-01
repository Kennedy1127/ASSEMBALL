<!-- //導覽列 深淺色版 切換 -->
<template>
  <transition name="fade">
    <MainHeader
      v-if="MainHeader"
      @toggle_notify="toggleNotify"
      @toggle_member="toggleMember"
      mode="out-in"
    />
  </transition>
  <transition name="fade">
    <MainHeaderLight
      v-if="MainHeaderLight"
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

  <!-- 會員中心頁面 -->
  <MemberCenter
    v-if="$store.state.isMemberVisible"
    @enter_personal="enterPersonal"
  />
  <router-view />
  <MainFooter v-if="$route.name !== 'Home'" />

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

export default {
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
        this.$store.state.isNotifyVisible = false;
        this.$store.state.isPersonalVisible = false;
        this.$store.state.isMemberVisible = false;
      }
    },
    //切換通知頁面
    toggleNotify() {
      this.$store.commit("NotifyToggle");
    },
    //切換會員頁面
    toggleMember() {
      this.$store.commit("MemberToggle");
    },
    //會員中心 > 個人資料頁面
    enterPersonal() {
      this.$store.commit("EnterPersonal");
    },
    //個人資料頁面返回 > 會員中心
    returnPage() {
      this.$store.commit("ReturnPage");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
