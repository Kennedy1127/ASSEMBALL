<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link :to="{ name: 'Home' }">首頁</router-link>
        </span>
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <span>拍賣專區</span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch @filterProducts="goToTop" />
          <ProductsAsideTags @filterProducts="goToTop" />
        </aside>

        <main class="products_main">
          <ProductsMainHeader />
          <ProductsMainItems v-if="!isNoResults" />
          <ProductsNoResults v-else />
        </main>
      </section>
    </div>
  </main>
</template>

<script setup>
import ProductsAsideSearch from "@/components/products/productsAside/ProductsAsideSearch";
import ProductsAsideTags from "@/components/products/productsAside/ProductsAsideTags";
import ProductsMainHeader from "@/components/products/productsItems/ProductsMainHeader";
import ProductsMainItems from "@/components/products/productsItems/ProductsMainItems";
import ProductsNoResults from "@/components/products/productsItems/ProductsNoResults.vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

onMounted(() => {
  // 檢查url是否有tag，有的話篩選
  if (route.query.tag) {
    store.commit("selectProductsTag", Number(route.query.tag));
    store.commit("resetPaginationCurPage", "products");
  }

  // 掛載後撈商品數量
  store.dispatch("getProductsCount");

  // 如果商品陣列長度為0或是商品陣列長度與商品數量不等於，則撈商品資料
  if (
    store.state.products.length === 0 ||
    store.state.products.length !== store.state.productsCount
  )
    store.dispatch("getProducts");
});

const isNoResults = computed(() => store.getters.filteredProducts.length === 0);

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style lang="scss">
.products {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 10rem;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 12rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1600px) {
      padding: 3rem 10rem;
    }
    @media screen and (max-width: 1500px) {
      padding: 3rem 6rem;
    }
    @media screen and (max-width: 1400px) {
      padding: 3rem 2rem;
    }
  }

  &_main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 994px; //不跑版設定
  }

  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;

    font-size: 1.25rem;

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    .icon {
      color: var(--primary-blue);
    }
  }

  &_content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;

    & aside {
      width: 190px;
    }

    .block {
      width: 8px;
      height: 26px;
      background-color: var(--primary-blue);
    }

    .icon {
      display: flex;
      align-items: center;
    }
  }

  &_main_header_category,
  &_aside_search_title,
  &_aside_tags_title {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }

  &_aside_search_title,
  &_aside_tags_title {
    border-bottom: 2px solid var(--secondary-gray-2);
    font-weight: 500;
    letter-spacing: 6px;
  }
}
</style>
