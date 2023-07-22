<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/">首頁</router-link>
        </span>
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <span>拍賣專區</span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch @filterProducts="filterByInput" />
          <ProductsAsideTags @filterProducts="filterByTag" />
        </aside>

        <main class="products_main">
          <ProductsMainHeader />
          <ProductsMainItems :products="products" />
        </main>
      </section>
    </div>
  </main>
</template>

<script>
import ProductsAsideSearch from "@/components/products/productsAside/ProductsAsideSearch";
import ProductsAsideTags from "@/components/products/productsAside/ProductsAsideTags";
import ProductsMainHeader from "@/components/products/productsItems/ProductsMainHeader";
import ProductsMainItems from "@/components/products/productsItems/ProductsMainItems";
import productsFakeData from "@/composables/productsData";

export default {
  components: {
    ProductsAsideSearch,
    ProductsAsideTags,
    ProductsMainHeader,
    ProductsMainItems,
  },

  data() {
    return {
      // 商品資料(僅在進入畫面時去取一次資料)
      productsData: [...productsFakeData],

      // 進入商品詳情
      isInProductDetail: false,
    };
  },

  computed: {
    products() {
      return this.productsData;
    },
  },

  methods: {
    // 搜尋欄過濾
    filterByInput(input) {
      this.$store.commit("resetProductsCurPage");
      this.productsData = productsFakeData.filter((el) =>
        el.product_title.includes(input)
      );
    },

    // tag 過濾
    filterByTag(type) {
      this.$store.commit("resetProductsCurPage");
      if (type === 7) return (this.productsData = [...productsFakeData]);

      this.productsData = productsFakeData.filter(
        (el) => el.product_type === type
      );
    },
  },

  mounted() {
    if (this.$route.query.tag) this.filterByTag(Number(this.$route.query.tag));
    if (this.$route.query.search) this.filterByInput(this.$route.query.search);
  },
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
