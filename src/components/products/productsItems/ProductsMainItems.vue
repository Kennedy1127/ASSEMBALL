<template>
  <div class="products_main_items">
    <div
      v-for="item in computedRenderProducts"
      :key="item.id"
      class="products_item"
      @click="goToProductDetail(item.id)"
    >
      <div class="products_item_header">
        <img
          :src="item.pic || require('@/assets/loading/loading.gif')"
          alt="product image"
        />
      </div>
      <div class="products_item_content">
        <div class="products_item_tag">#{{ productTags[item.tag] }}</div>
        <div class="products_item_date">
          {{ convertDate(item.date.toDate()) }}
        </div>
        <h2 class="products_item_title">{{ item.title }}</h2>
        <div class="products_item_price">NT${{ convertPrice(item.price) }}</div>
        <div class="products_item_seller">
          <div class="products_item_seller_icon">
            <img
              :src="
                item.seller_pic ||
                require('@/assets/images/icons/main-icon.png')
              "
              alt="seller icon"
            />
          </div>
          <div class="products_item_seller_msg">
            <span>賣家留言：</span> <br />
            <p>
              {{ item.comments[0].comment }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PaginationComponentVue :totalPages="computedTotalPages" type="products" />
</template>

<script setup>
import PaginationComponentVue from "@/components/utilities/PaginationComponent.vue";
import productTags from "@/composables/tables/productTags";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

// 更新螢幕捲動高度
const onScroll = (e) => {
  windowTop.value =
    window.top.scrollY; /* or: e.target.documentElement.scrollTop */
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

// 螢幕捲動高度
const windowTop = ref(window.top.scrollY);

// 呈現商品
const computedRenderProducts = computed(() => {
  const start = store.state.isMobile
    ? (store.state.curPage - 1) * 5
    : (store.state.curPage - 1) * 9;

  const end = store.state.isMobile
    ? store.state.curPage * 5
    : store.state.curPage * 9;

  return store.getters.dateSortedFilteredProducts.slice(start, end);
});

// 取得總頁數
const computedTotalPages = computed(() => {
  if (store.state.productsCount === 0) return 1;
  const len = store.getters.filteredProducts.length;

  return store.state.isMobile
    ? len % 5 === 0
      ? len > 5
        ? len / 5
        : 1
      : Math.ceil(len / 5)
    : len % 9 === 0
    ? len > 9
      ? len / 9
      : 1
    : Math.ceil(len / 9);
});

// 日期轉換
const convertDate = (inputDate) => {
  const date = new Date(inputDate);

  return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
    2,
    0
  )} / ${String(date.getDate()).padStart(2, 0)}`;
};

// 轉換數字，1000->1,000
const convertPrice = (price) => {
  return Number(price).toLocaleString();
};

const goToProductDetail = (id) => {
  router.push({
    name: "ProductDetail",
    params: { productId: id },
    query: { h: windowTop.value },
  });
};
</script>

<style scoped lang="scss">
.products_main_items {
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4rem;

  @media all and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
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
    width: 100%;
    height: 195px;
    background-color: #eaeaea;
    border-radius: 8px;
    overflow: hidden;

    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

    &_icon {
      width: 4rem;
      height: 4rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &_msg {
      flex: 1;
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
        word-break: break-all;
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
