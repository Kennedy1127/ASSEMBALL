<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/">首頁</router-link>
        </span>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-right.png"
            alt="breadcrumb arrow"
          />
        </div>
        <span>
          <router-link to="/products">拍賣專區</router-link>
        </span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch />
          <ProductsAsideTags :productTags="productTags" />
        </aside>

        <main class="products_main">
          <ProductsMainHeader />
          <ProductsMainItems :productsData="productsData" />
        </main>
      </section>
    </div>
  </main>
</template>

<script>
import ProductsAsideSearch from '@/components/products/productsAside/ProductsAsideSearch';
import ProductsAsideTags from '@/components/products/productsAside/ProductsAsideTags';
import ProductsMainHeader from '@/components/products/productsItems/ProductsMainHeader';
import ProductsMainItems from '@/components/products/productsItems/ProductsMainItems';
import productsData from '@/composables/productsData';

export default {
  components: {
    ProductsAsideSearch,
    ProductsAsideTags,
    ProductsMainHeader,
    ProductsMainItems,
  },
  data() {
    return {
      productTags: [
        { name: '#全部', type: 'all' },
        { name: '#球棒', type: 'bat' },
        { name: '#手套', type: 'glove' },
        { name: '#球衣', type: 'jersey' },
        { name: '#打擊手套', type: 'batting glove' },
        { name: '#球帽', type: 'cap' },
      ],
      productsData: [...productsData],
    };
  },
};
</script>

<style lang="scss">
.products {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;

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
      // text-decoration-thickness: 2px;
    }
  }

  &_content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;

    .block {
      width: 4px;
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
