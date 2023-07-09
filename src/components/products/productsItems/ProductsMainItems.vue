<template>
  <div class="products_main_items">
    <div
      v-for="product in products"
      :key="product.pro_id"
      class="products_item"
    >
      <div class="products_item_header">
        <img src="~@/assets/images/products/bat.png" alt="product image" />
      </div>
      <div class="products_item_content">
        <div class="products_item_tag">#{{ product.typeName }}</div>
        <div class="products_item_date">{{ product.date }}</div>
        <h2 class="products_item_title">{{ product.title }}</h2>
        <div class="products_item_desc">
          商品使用說明： <br />
          <p>
            {{ product.desc }}
          </p>
        </div>
        <div class="products_item_price">
          NT${{ convertPrice(product.price) }}
        </div>
        <div class="products_item_seller">
          <div class="products_item_seller_icon">
            <img src="~@/assets/images/icons/main-icon.png" alt="seller icon" />
          </div>
          <div class="products_item_seller_msg">
            賣家留言： <br />
            <p>
              {{ product.seller.msg }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ProductsMainPagination />
</template>

<script>
import ProductsMainPagination from '@/components/products/productsItems/ProductsMainPagination';

export default {
  components: { ProductsMainPagination },
  props: ['products'],
  data() {
    return {
      products: this.$props.products,
    };
  },

  methods: {
    convertPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>

<style scoped lang="scss">
.products_main_items {
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 4rem;
}

.products_item {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &_header {
    width: 315px;
    height: 195px;
    background-color: #eaeaea;
    border-radius: 8px;
    overflow: hidden;
  }

  &_tag {
    width: fit-content;
    font-size: 14px;
    padding: 3px 11px;
    border-radius: 27px;
    background-color: var(--accent-yellow);
    cursor: pointer;
  }

  &_date {
    margin: 0.5rem 0;
  }

  &_title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &_desc {
    font-size: 1rem;
    font-weight: 400;
    color: var(--secondary-gray-1);

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &_price {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--error-red);
    font-family: 'Noto Sans TC', sans-serif;
    margin: 1rem 0;
  }

  &_seller {
    display: flex;
    gap: 10px;

    &_msg {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background-color: var(--secondary-blue-4);
      position: relative;
      z-index: 1;

      p {
        color: var(--secondary-gray-1);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 20px;
        left: -12px;

        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 16px 8px 0;
        border-color: transparent var(--secondary-blue-4) transparent
          transparent;
      }
    }
  }
}
</style>
