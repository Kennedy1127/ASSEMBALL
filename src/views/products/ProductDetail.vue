<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link :to="{ name: 'Products' }">拍賣專區</router-link>
        </span>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-right.png"
            alt="breadcrumb arrow"
          />
        </div>
        <span>商品詳情</span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch @filterProducts="goToProducts" />
          <ProductsAsideTags @filterProducts="goToProducts" />
        </aside>

        <main class="products_main" v-if="productItemData">
          <ProductsMainItem :productItemData="productItemData" />
          <ProductsMainItemMsg :productMsgData="productMsgData" />
        </main>
      </section>
    </div>
  </main>
</template>

<script setup>
import ProductsAsideSearch from "@/components/products/productsAside/ProductsAsideSearch";
import ProductsAsideTags from "@/components/products/productsAside/ProductsAsideTags";
import ProductsMainItem from "@/components/products/productsItem/ProductsMainItem";
import ProductsMainItemMsg from "@/components/products/productsItem/ProductsMainItemMsg";
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  // 如果商品陣列長度為0或是商品陣列長度與商品數量不等於，則撈商品資料

  if (
    store.state.products.length === 0 ||
    store.state.products.find(
      (product) => product.product_id === route.params.id
    )
  ) {
    store.dispatch("getProductsCount");
    store.dispatch("getProducts");
  }
});

const productData = computed(() =>
  store.state.products.find((product) => product.product_id === route.params.id)
);

const productItemData = computed(() => {
  if (!productData.value) return false;

  return {
    product_seller_name: productData.value.product_seller_name,
    product_seller_icon: productData.value.product_seller_icon,
    product_seller_msg: productData.value.product_seller_msg,
    product_area: productData.value.product_area,
    product_email: productData.value.product_email,
    product_phone: productData.value.product_phone,
    product_price: productData.value.product_price,
    product_pics: productData.value.product_pics,
    product_tag: productData.value.product_tag,
    product_date: productData.value.product_date,
    product_title: productData.value.product_title,
    product_id: productData.value.product_id,
  };
});

const productMsgData = computed(() => productData.value.product_comments);

const goToProducts = () => {
  router.push({ name: "Products" });
  route.query.h = 0;
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
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    margin: auto;
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

  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;

    font-size: 1.25rem;

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      // text-decoration-thickness: 2px;
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
