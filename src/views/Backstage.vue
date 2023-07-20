<template>
  <main class="Backstage">
    <div class="Backstage_header">
      <!-- 後台頁首 -->
      <div class="Backstage_header_logo">
        <img src="~@/assets/images/Backstage/Backstagelogo.png" />
      </div>
      <div class="Backstage_header_title">首頁管理</div>
      <button class="Backstage_header_list">首頁最新消息</button>
      <button class="Backstage_header_list">首頁商品</button>
      <button class="Backstage_header_list">首頁徵人文章</button>
      <button class="Backstage_header_ikon"></button>
    </div>

    <div class="container">
      <!-- 左邊欄 -->
      <Backstageaside />
      <!-- 左邊欄 -->

      <!-- 後台管理內容--------------------------------- -->
      <div class="Backstage_page">
        <!-- 後台首頁最新消息管理 -->

        <!-- <BackstageHomepageNews /> -->
        <!-- 後台首頁最新消息管理 -->

        <!-- 後台首頁商品管理 -->
        <BackstageHomepageProducts />
        <!-- 後台首頁商品管理 -->
      </div>
    </div>
  </main>
</template>
<script>
import Backstageaside from "@/components/Backstage/Backstageaside.vue";
import BackstageHomepageNews from "@/components/Backstage/BackstageHomepageNews.vue";
import BackstageHomepageProducts from "@/components/Backstage/BackstageHomepageProducts.vue";

export default {
  components: {
    Backstageaside,
    BackstageHomepageNews,
    BackstageHomepageProducts,
  },
};
</script>
<style scoped lang="scss">
.Backstage {
  background-color: var(--secondary-blue-4);
width: 100%;
  .container {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    position: relative;
    display: flex;
  }
}
.Backstage_header {
  //頁首
  padding: 2rem;
  width: 100%;
  background-color: var(--primary-blue);
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  .Backstage_header_logo {
    margin-left: 0;
  }
  .Backstage_header_title {
    display: flex;
    align-items: center;
    color: var(--primary-black);
    font-size: 2rem;
  }
  .Backstage_header_list {
    width: 115px;
    height: 44px;
    border-radius: 8px;
    font-size: 1rem;
    background-color: var(--secondary-blue-2);
  }
  .Backstage_header_ikon {
    width: 1rem;
    height: 1rem;
    border-radius: 8px;
    background-color: var(--accent-yellow);
  }
}

.Backstage_page {
  width: 85%;
  padding: 4rem 0;
}
</style>
