<template>
  <div class="home_recruit_title">
    <div class="home_recruit_title_pic">
      <img
        class="home_recruit_title_pic_recruit"
        src="~@/assets/images/index/home_recruit.png"
        alt="recruit"
      />
    </div>
    <div class="home_recruit_title_text">
      <h2>
        <router-link to="/">球隊招募</router-link>
      </h2>
      <p>發掘你的潛力，成為球隊的關鍵一員！</p>
    </div>
  </div>
  <div class="home_recruit_carousel"></div>
</template>

<!-- <script>
export default {
  data() {
    return {

};
</script> -->

<style scoped lang="scss">
.home_recruit_title {
  width: 25%;
  display: flex;
  border-right: 3px solid var(--primary-blue);
  &_pic {
    width: 10%;
    margin-top: auto;
    position: absolute;
    bottom: 2.25rem;
    left: 3rem;
    // animation: recruit 2s linear infinite;
    & img {
      width: 100%;
    }
    // @keyframes recruit {
    //   10% {
    //     transform: rotate(15deg);
    //   }
    //   20% {
    //     transform: rotate(-10deg);
    //   }
    //   30% {
    //     transform: rotate(5deg);
    //   }
    //   40% {
    //     transform: rotate(-5deg);
    //   }
    //   50% {
    //     transform: rotate(0deg);
    //   }
    //   100% {
    //     transform: rotate(0deg);
    //   }
    // }
  }
  &_text {
    display: flex;
    margin: auto;
    & h2 {
      writing-mode: vertical-lr;
      font-size: 2.5rem;
      a {
        color: var(--primary-blue);
      }
    }
    & p {
      writing-mode: vertical-lr;
      font-size: 1.25rem;
      color: var(--primary-blue);
      margin-left: 1rem;
    }
  }
}
.home_recruit_carousel {
  width: 75%;
  padding: 1rem;
}
</style>
