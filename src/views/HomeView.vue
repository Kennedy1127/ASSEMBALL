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

  mounted() {
    this.$store.dispatch("getHomeNews");
    this.$store.dispatch("getHomeTeams");
    this.$store.dispatch("getHomeCopywritings");
    this.$store.dispatch("getHomeProducts");
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
    max-width: 100%;
    // max-width: 1600px;
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
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      background-color: var(--primary-blue);
      padding-top: 2rem;
      overflow: hidden;
    }
    //最新消息
    .home_news {
      width: 100%;
      background-color: #fff;
      color: var(--primary-blue);
      display: flex;
      text-align: center;
      position: relative;
      z-index: 2;
      overflow: hidden;
    }
    // 球隊招募
    .home_recruit {
      width: 100%;
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
      padding: 4rem 2rem 4rem 2rem;
      display: flex;
      position: relative;
      overflow: hidden;
    }
    // 交流留言板
    .home_message {
      width: 100%;
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
    }
    // 二手拍賣區
    .home_auction {
      width: 100%;
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
    }
    .home_product {
      width: 100%;
      position: relative;
      padding: 2rem 0.5rem 2rem 0.5rem;
    }
    .home_footer {
      width: 100%;
      overflow: hidden;
    }
  }
}
@media screen and (max-width: 420px) {
  .home {
    width: 100%;
    .wrapper {
      width: 100%;
      // 網站故事
      .home_landing {
        height: 1600px;
        padding: 1.25rem;
      }
      // 跑馬燈
      .home_marquee {
        padding-top: 1rem;
      }
      //最新消息
      .home_news {
        display: flex;
        flex-direction: column;
        z-index: 2;
      }
      // 球隊招募
      .home_recruit {
        padding: 1rem 0rem 2rem 0rem;
        display: flex;
        flex-direction: column;
        position: none;
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
        position: relative;
        overflow: hidden;
      }
      .home_footer {
      }
    }
  }
}
</style>
