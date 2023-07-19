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
  <MemberNotify v-if="$store.state.isNotifyVisible" :show="showNotify" />
  <!-- 會員中心內容 -->
  <MemberCenter v-if="$store.state.isMemberVisible" :show="showMember" />
  <router-view />
  <MainFooter />
</template>

<style>
.fade-enter-active {
  animation: fade-in 0.01s;
}
.fade-leave-active {
  animation: fade-out 0.01s;
}

@keyframes fade-in {
  from {
    opacity: 1;
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
    opacity: 1;
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
      if (scrollPosition > 40) {
        this.MainHeaderLight = true;
        this.MainHeader = false;
      } else {
        this.MainHeaderLight = false;
        this.MainHeader = true;
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
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
