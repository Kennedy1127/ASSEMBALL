<template>
  <div class="products_aside_mobile">
    <div class="products_aside_mobile_category">
      <span>類別</span>
      <div class="block"></div>
      <span>球棒</span>
    </div>

    <div class="products_aside_mobile_search">
      <div class="products_aside_mobile_search_input">
        <input type="text" placeholder="輸入關鍵字" v-model="searchText" />
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>

      <div class="products_aside_mobile_search_btn">
        <button @click="filterProducts">
          <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
          搜索
        </button>
      </div>
    </div>

    <div class="products_aside_mobile_select">
      <div class="products_aside_mobile_select_title">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-paperclip" />
        </div>
        <div>類別選擇</div>
      </div>
      <SelectorComponent v-model="selectedTag" :options="productTags" />
    </div>
  </div>
</template>

<script setup>
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["productTags"]);
const emit = defineEmits(["filterProducts", "filterProductsByTag"]);

const searchText = ref(store.state.selectedProductsText);
const selectedTag = ref(0);
const productTags = ref([
  {
    id: 0,
    label: "全部商品",
  },
  {
    id: 1,
    label: "球棒",
  },
  {
    id: 2,
    label: "球帽",
  },
  {
    id: 3,
    label: "球衣",
  },
  {
    id: 4,
    label: "球",
  },
  {
    id: 5,
    label: "護具",
  },
  {
    id: 6,
    label: "釘鞋",
  },
  {
    id: 7,
    label: "手套",
  },
]);

const filterProducts = () => {
  store.commit("selectProductsSearch", {
    searchText: searchText.value,
    // selectedDate: selectedDate.value,
  });
  store.commit("resetPaginationCurPage", "products");

  emit("filterProducts");
};

watch(selectedTag, (tag) => {
  store.commit("selectProductsTag", tag);
  store.commit("resetPaginationCurPage", "products");

  emit("filterProductsByTag", tag);
});
</script>

<style lang="scss">
.products_aside_mobile {
  &_category {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    font-size: 1rem;

    .block {
      width: 4px;
    }
  }

  &_search {
    margin-top: 1.5rem;
    &_input {
      position: relative;

      input {
        width: 100%;
        border: none;
        padding: 1rem;
        padding-left: 3rem;
        border-radius: var(--round);

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
        left: 0.5rem;
        transform: translateY(-50%);

        cursor: pointer;
      }
    }

    &_btn {
      margin-top: 1.5rem;
      width: 100%;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        width: 100%;
        height: 60px;
        border-radius: 35px;
        background-color: var(--primary-blue);

        font-size: 1.25rem;
        font-weight: 500;
        color: #fff;
        letter-spacing: 5px;
      }
    }
  }

  &_select {
    margin-top: 1.5rem;

    &_title {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      .icon {
        font-size: 1.25rem;
        color: var(--primary-blue);
      }

      font-size: 1rem;
      font-weight: 500;
    }

    .selector-component {
      width: 100%;

      .ivu-select-selection {
        color: var(--secondary-gray-3);

        i::before {
          color: var(--primary-blue) !important;
        }
      }
    }
  }
}
</style>
