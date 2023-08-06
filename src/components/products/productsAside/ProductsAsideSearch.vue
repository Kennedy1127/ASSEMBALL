<template>
  <div class="products_aside_search">
    <div class="products_aside_search_title">
      <div class="block"></div>
      <div>搜尋</div>
    </div>

    <div class="products_aside_search_input">
      <input type="text" placeholder="輸入關鍵字" v-model="searchText" />
      <div class="icon" @click="filterProducts">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
    </div>

    <div class="products_aside_search_filter">
      <ProductsAsideSelect v-model="selectedDate" />
    </div>

    <div class="products_aside_search_button">
      <button @click="filterProducts" id="Button">
        <div class="icon">
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            style="color: #ffffff"
          />
        </div>
        搜索
      </button>
    </div>
  </div>
</template>

<script setup>
import ProductsAsideSelect from "@/components/products/productsAside/ProductsAsideSelect.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["filterProducts"]);

const searchText = ref(store.state.selectedProductsText);
const selectedDate = ref(store.state.selectedProductsDate);

const filterProducts = () => {
  store.commit("selectProductsSearch", {
    searchText: searchText.value,
    selectedDate: selectedDate.value,
  });
  store.commit("resetPaginationCurPage", "products");

  emit("filterProducts");
};
</script>

<style scoped lang="scss">
.products_aside_search {
  .block {
    width: 8px;
    height: 26px;
    background-color: var(--primary-blue);
  }

  &_title {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1rem;
    font-size: 1.25rem;

    border-bottom: 2px solid var(--secondary-gray-2);
    font-weight: 500;
    letter-spacing: 6px;
  }

  &_input {
    margin-top: 1.5rem;
    position: relative;

    input {
      width: 100%;
      border: none;
      padding: 1.25rem 1rem;
      border-radius: var(--round);
      background-color: var(--secondary-blue-4);

      font-size: 1rem;
      font-weight: 400;

      &:focus {
        background-color: var(--pale-white);
        outline: 2px solid var(--secondary-blue-1);
      }

      &::placeholder {
        color: var(--secondary-gray-3);
      }
    }

    .icon {
      font-size: 1.3rem;
      color: var(--primary-blue);
      position: absolute;
      top: 50%;
      right: 1.25rem;
      transform: translateY(-50%);

      cursor: pointer;
    }
  }

  &_filter {
    margin-top: 1.5rem;

    &_dropdown {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 1.5px;
      padding: 1.25rem 1rem;
      border-radius: var(--round);
      border: 2px solid var(--secondary-blue-2);

      position: relative;
      cursor: pointer;
      .icon {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        color: var(--primary-blue);
        font-size: 1.3rem;
      }
    }
  }

  &_button {
    margin-top: 2rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      width: 150px;
      height: 50px;
      margin: 0 auto;
      border-radius: 35px;
      background-color: var(--primary-blue);

      font-family: inherit;
      font-size: 1.25rem;
      letter-spacing: 6px;
      color: #fff;
      transition: all 0.09s ease-in-out;
    }
    & button:hover {
      background-color: var(--secondary-blue-1);
    }
  }
}
</style>
