<template>
  <div class="home_marquee_hashtag">
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeProduct"
      :key="item"
    >
      <router-link :to="{ name: 'Products' }">{{ item }}</router-link>
    </div>
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeProduct"
      :key="item"
    >
      <router-link :to="{ name: 'Products' }">{{ item }}</router-link>
    </div>
  </div>
  <div class="home_marquee_hashtag">
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeCopywriting"
      :key="item"
    >
      <router-link :to="{ name: 'Recruitments' }">{{ item }}</router-link>
    </div>
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeCopywriting"
      :key="item"
    >
      <router-link :to="{ name: 'Recruitments' }">{{ item }}</router-link>
    </div>
  </div>
  <div class="home_marquee_hashtag">
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeTeach"
      :key="item"
    >
      <router-link :to="{ name: 'rookie' }">{{ item }}</router-link>
    </div>
    <div
      class="home_marquee_hashtag_text"
      v-for="item in homeMarqueeTeach"
      :key="item"
    >
      <router-link :to="{ name: 'rookie' }">{{ item }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeMarqueeProduct: [
        "＃品牌裝備",
        "＃球場必備",
        "#球衣收藏",
        "#優質裝備",
        "#球具清倉",
        "#耐用品",
        "#全新球套",
        "#團隊配備",
        "#捕手手具",
        "#投手球鞋",
        "#高比重",
        "＃品牌裝備",
        "＃球場必備",
        "#球衣收藏",
        "#優質裝備",
        "#球具清倉",
        "#耐用品",
        "#全新球套",
        "#團隊配備",
        "#捕手手具",
        "#投手球鞋",
        "#高比重",
      ],
      homeMarqueeCopywriting: [
        "＃強弱組合",
        "＃人才招募",
        "#領袖球員",
        "#場上領導",
        "#守備能力",
        "#團隊精神",
        "#季節準備",
        "#球隊聲望",
        "#球員篩選",
        "#休閒球隊",
        "#實力對戰",
        "＃強弱組合",
        "＃人才招募",
        "#領袖球員",
        "#場上領導",
        "#守備能力",
        "#團隊精神",
        "#季節準備",
        "#球隊聲望",
        "#球員篩選",
        "#休閒球隊",
        "#實力對戰",
      ],
      homeMarqueeTeach: [
        "#打擊率",
        "#衝刺出壘",
        "＃滾地球",
        "#投手輪換",
        "#本壘打",
        "#三振",
        "#快速球",
        "#變化球",
        "#逆轉比賽",
        "#滑壘",
        "#指叉球",
        "#打擊率",
        "#衝刺出壘",
        "＃滾地球",
        "#投手輪換",
        "#本壘打",
        "#三振",
        "#快速球",
        "#變化球",
        "#逆轉比賽",
        "#滑壘",
        "#指叉球",
      ],
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
</style>
