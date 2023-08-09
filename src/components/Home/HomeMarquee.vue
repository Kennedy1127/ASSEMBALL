<template>
  <div class="home_marquee_hashtag">
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeProduct.text"
      :key="item"
    >
      <router-link :to="{ name: 'Recruitments' }">{{ item.text }}</router-link>
    </div>
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeProduct.text"
      :key="item"
    >
      <router-link :to="{ name: 'Recruitments' }">{{ item.text }}</router-link>
    </div>
  </div>
  <div class="home_marquee_hashtag">
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeCopywriting.text"
      :key="item"
    >
      <router-link :to="{ name: 'rookie' }">{{ item.text }}</router-link>
    </div>
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeCopywriting.text"
      :key="item"
    >
      <router-link :to="{ name: 'rookie' }">{{ item.text }}</router-link>
    </div>
  </div>
  <div class="home_marquee_hashtag">
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeTeach.text"
      :key="item"
    >
      <router-link :to="{ name: 'Products' }">{{ item.text }}</router-link>
    </div>
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeTeach.text"
      :key="item"
    >
      <router-link :to="{ name: 'Products' }">{{ item.text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const res = await this.$store.dispatch("getHomeMarquee");
    console.log(res);
    this.homeMarqueeProduct = res[0];
    this.homeMarqueeCopywriting = res[1];
    this.homeMarqueeTeach = res[2];
    // console.log(this.homeMarqueeProduct);
    // console.log(this.homeMarqueeCopywriting);
    // console.log(this.homeMarqueeTeach);
  },

  data() {
    return {
      homeMarqueeProduct: [],
      homeMarqueeCopywriting: [],
      homeMarqueeTeach: [],
    };
  },
};
</script>

<style scoped lang="scss">
.home_marquee_hashtag {
  display: flex;
  animation: scroll 50s linear infinite;
  &:nth-child(2) {
    animation: scroll2 50s linear infinite;
  }
  &_text {
    padding: 1rem 1rem 1rem 0;
    flex-shrink: 0;
    border-top: 1px solid #fff;
    a {
      color: #fff;
    }
  }
  @keyframes scroll {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes scroll2 {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
}
@media screen and (max-width: 420px) {
  .home_marquee_hashtag {
    display: flex;
    animation: scroll 20s linear infinite;
    &:nth-child(2) {
      animation: scroll2 20s linear infinite;
    }
    &_text {
      padding: 0.5rem 1rem 0.5rem 0;
      flex-shrink: 0;
      border-top: 1px solid #fff;
      a {
        color: #fff;
        font-size: 1.25rem;
      }
    }
    @keyframes scroll {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-100%);
      }
    }
    @keyframes scroll2 {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
}
</style>
