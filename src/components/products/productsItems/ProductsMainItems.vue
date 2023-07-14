<template>
  <div class="products_main_items">
    <div
      v-for="item in productItems"
      :key="item.product_id"
      class="products_item"
    >
      <div class="product_item_header">
        <img src="~@/assets/images/products/bat.png" alt="product image" />
        <!-- <img :src="item.product_pic" alt="product image" /> -->
      </div>
      <div class="products_item_content">
        <div class="products_item_tag">
          #{{ productTags[item.product_type] }}
        </div>
        <div class="products_item_date">
          {{ convertDate(item.product_date) }}
        </div>
        <h2 class="products_item_title">{{ item.product_title }}</h2>
        <div class="products_item_price">
          NT${{ convertPrice(item.product_price) }}
        </div>
        <div class="products_item_seller">
          <div class="products_item_seller_icon">
            <img src="~@/assets/images/icons/main-icon.png" alt="seller icon" />
          </div>
          <div class="products_item_seller_msg">
            <span>賣家留言：</span> <br />
            <p>
              {{ item.product_seller.msg }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ProductsMainPagination :totalPages="totalPages" />
</template>

<script>
import ProductsMainPagination from "@/components/products/productsItems/ProductsMainPagination";
import productTags from "@/composables/productTags";

export default {
  components: { ProductsMainPagination },
  props: ["products"],
  data() {
    return {
      productTags: { ...productTags },
    };
  },

  computed: {
    // 取得總頁數
    totalPages() {
      return this.$props.products.length % 9 === 0
        ? this.$props.products.length > 9
          ? this.$props.products.length / 9
          : 1
        : Math.ceil(this.$props.products.length / 9);
    },

    // 更具頁碼更新顯示商品
    productItems() {
      const startIndex = (this.$store.state.productsCurPage - 1) * 9;
      const lastIndex = this.$store.state.productsCurPage * 9;
      return this.$props.products.slice(startIndex, lastIndex);
    },
  },

  methods: {
    // 日期轉換
    convertDate(inputDate) {
      const date = new Date(inputDate);

      return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
        2,
        0
      )} / ${String(date.getDate()).padStart(2, 0)}`;
    },

    // 轉換數字，1000->1,000
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
  row-gap: 4rem;
}

.products_item {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-blue-4);
    border-radius: var(--round);
  }

  &_header {
    width: 315px;
    height: 195px;
    background-color: #eaeaea;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &_content {
    margin-top: 0.5rem;
  }

  &_tag {
    width: fit-content;
    font-size: 14px;
    padding: 3px 11px;
    border-radius: 27px;
    background-color: var(--accent-yellow);
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  &_tag:hover {
    background-color: var(--error-yellow);
  }

  &_date {
    margin: 0.5rem 0;
    color: var(--secondary-gray-1);
    font-size: 0.875rem;
  }

  &_title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &_price {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--error-red);
    font-family: "Noto Sans TC", sans-serif;
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
      font-family: "Noto Sans TC";
      letter-spacing: 1.5px;
      & span {
        font-weight: 500;
        color: var(--primary-black);
      }
      p {
        color: var(--secondary-gray-1);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 0.875rem;
      }

      &::after {
        content: "";
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
