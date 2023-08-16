<template>
  <transition name="fade" mode="out-in">
    <div @click="scrollToTop" v-if="showBackToTopButton" class="fade-button">
      <font-awesome-icon icon="fa-solid fa-angle-up" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showBackToTopButton: false,
      scrollToShowButton: 400, // 設定滾動到多少距離時顯示按鈕（以像素為單位）
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // 初始時檢查是否需要顯示按鈕
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPosition >= this.scrollToShowButton) {
        this.showBackToTopButton = true;
      } else {
        this.showBackToTopButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
//淡出淡入
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-button {
  z-index: 30;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 20rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--pale-white);
  color: var(--primary-blue);
  border: solid 1px var(--primary-blue);
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  transition: all 0.1s ease-in-out;
  @media all and (max-width: 420px) {
    right: 0.5rem;
    bottom: 7.5rem;
  }
  &:hover {
    background-color: var(--primary-blue);
    color: var(--pale-white);
  }
  .svg-inline--fa.fa-angle-up {
    display: block;
  }
}
</style>
