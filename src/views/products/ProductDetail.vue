<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/products">拍賣專區</router-link>
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
          <ProductsAsideSearch />
          <ProductsAsideTags />
        </aside>

        <main class="products_main">
          <ProductsMainItem />
          <ProductsMainItemMsg />
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
