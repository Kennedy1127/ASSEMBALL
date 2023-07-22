<template>
  <main class="home">
    <div class="wrapper">
      <section class="home_landing">
        <HomeLanding />
      </section>
      <aside class="home_marquee">
        <HomeMarquee />
      </aside>
      <section class="home_news">
        <HomeNews />
      </section>
      <section class="home_recruit">
        <HomeRecruit />
      </section>
      <section class="home_message">
        <HomeMessage />
      </section>
      <section class="home_auction">
        <HomeAuction />
      </section>
      <section class="home_product">
        <HomeProduct />
      </section>
      <footer class="home_footer">
        <HomeFooter />
      </footer>
    </div>
  </main>
</template>

<script>
import HomeLanding from "@/components/Home/HomeLanding";
import HomeMarquee from "@/components/Home/HomeMarquee";
import HomeNews from "@/components/Home/HomeNews";
import HomeRecruit from "@/components/Home/HomeRecruit";
import HomeMessage from "@/components/Home/HomeMessage";
import HomeAuction from "@/components/Home/HomeAuction";
import HomeProduct from "@/components/Home/HomeProduct";
import HomeFooter from "@/components/Home/HomeFooter";

export default {
  components: {
    HomeLanding,
    HomeMarquee,
    HomeNews,
    HomeRecruit,
    HomeMessage,
    HomeAuction,
    HomeProduct,
    HomeFooter,
  },

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  background-color: var(--primary-blue);
  padding-top: 2rem;
  .wrapper {
    width: 100%;
    max-width: 1600px;
    // 網站故事
    .home_landing {
      width: 100%;
      height: 1650px;
      color: #fff;
      padding: 2rem;
      position: relative;
    }
    // 跑馬燈
    .home_marquee {
      text-align: center;
      font-size: 1.5rem;
      background-color: var(--primary-blue);
      padding-top: 2rem;
      overflow: hidden;
    }
    //最新消息
    .home_news {
      background-color: #fff;
      color: var(--primary-blue);
      display: flex;
      text-align: center;
      position: relative;
      z-index: 2;
    }
    // 球隊招募
    .home_recruit {
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
      padding: 4rem 2rem 4rem 2rem;
      display: flex;
      position: relative;
    }
    // 交流留言板
    .home_message {
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
    }
    // 二手拍賣區
    .home_auction {
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
    }
    .home_product {
      display: flex;
    }
    .home_footer {
    }
  }
}
</style>
