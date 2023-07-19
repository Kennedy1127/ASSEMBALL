<!-- //導覽列 深淺色版 切換 -->
<template>
  <transition name="fade">
    <MainHeader
      v-if="MainHeader"
      @toggle_notify="toggleNotify"
      @toggle_member="toggleMember"
    />
  </transition>
  <transition name="fade">
    <MainHeaderLight
      v-if="MainHeaderLight"
      @toggle_notify="toggleNotify"
      @toggle_member="toggleMember"
    />
  </transition>
  <!-- 通知視窗內容 -->
  <MemberNotify v-if="isNotifyVisible" :show="showNotify" />
  <!-- 會員中心內容 -->
  <MemberCenter v-if="isMemberVisible" :show="showMember" />
  <MainHeader v-if="$route.name !='Backstage'" />
  <router-view />
  <MainFooter  v-if="$route.name !='Backstage'"/>
</template>

<style>
.fade-enter-active {
  animation: fade-in 0.1s;
}
.fade-leave-active {
  animation: fade-out 0.1s;
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
import MainFooter from "@/components/MainFooter.vue";

export default {
  data() {
    return {
      // 導覽列顯示
      MainHeader: true,
      MainHeaderLight: false,
      // 通知視窗顯示
      isNotifyVisible: false,
      isMemberVisible: false,
    };
  },
  components: {
    MainHeader,
    MainFooter,
    MainHeaderLight,
    MemberNotify,
    MemberCenter,
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
      if (scrollPosition >= 80) {
        this.MainHeaderLight = true;
        this.MainHeader = false;
      } else {
        this.MainHeaderLight = false;
        this.MainHeader = true;
      }
    },
    //點擊和關閉_通知視窗
    toggleNotify() {
      this.isNotifyVisible = !this.isNotifyVisible;
      this.isMemberVisible = false;
    },
    //點擊和關閉_會員視窗
    toggleMember() {
      this.isMemberVisible = !this.isMemberVisible;
      this.isNotifyVisible = false;
    },
    // // 在路由跳转前关闭页面(失敗QQ)
    // closePage(next) {
    //   this.isMemberVisible = false;
    //   this.isNotifyVisible = false;
    //   next();
    // },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
