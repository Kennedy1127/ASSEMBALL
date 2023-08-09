<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link :to="{ name: 'Products' }">拍賣專區</router-link>
        </span>
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <span>商品詳情</span>

        <div class="products_breadcrumb_features">
          <div class="products_breadcrumb_features_icon">
            <router-link :to="{ name: 'ProductPost' }">
              <div class="icon icon--add">
                <font-awesome-icon icon="fa-solid fa-plus" />
              </div>
            </router-link>
          </div>

          <div class="products_breadcrumb_features_icon">
            <router-link :to="{ name: 'ProductsManage' }">
              <div class="icon icon--manage">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              </div>
            </router-link>

            <div class="products_breadcrumb_features_icon_notify">99+</div>
          </div>
        </div>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch
            v-if="!store.state.isMobile"
            @filterProducts="goToTop"
          />
          <ProductsAsideTags
            v-if="!store.state.isMobile"
            @filterProducts="goToTop"
          />
        </aside>

        <main class="products_main" v-if="productData">
          <ProductsMainItem :productData="productData" />
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
import getData from "@/composables/data/getData";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { getDocument, getSubCollectionDocuments } = getData();

onMounted(async () => {
  store.state.isPending = true;

  const productData = await getDocument("PRODUCTS", route.params.productId);
  if (!productData) {
    router.push({ name: "Home" });
  }

  const comments = await getSubCollectionDocuments(
    {
      collectionName: "PRODUCTS",
      documentId: route.params.productId,
      subCollectionName: "COMMENTS",
    },
    [],
    ["date"]
  );

  data.value = { ...productData, comments };
  store.state.isPending = false;
});

const data = ref(null);
const productData = computed(() => data.value);

const productMsgData = computed(() => ({
  comments: [...productData.value.comments],
  seller_id: productData.value.seller_id,
}));

const goToTop = () => {
  router.push({ name: "Products" });
  route.query.h = 0;
};
</script>

<style scoped lang="scss">
.products {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 10rem;

  @media all and (max-width: 420px) {
    padding-top: 196px;
    background-color: #fff;
  }

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
    @media screen and (max-width: 420px) {
      padding: 0 1.5rem 1rem;
      border-radius: 0;
      box-shadow: none;
    }
  }

  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;
    font-size: 1.25rem;

    @media all and (max-width: 420px) {
      gap: 0.5rem;
      font-size: 1rem;
      // align-items: center;

      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;

      width: 100%;
      height: 80px;
      margin: 4.5rem 0 0;
      padding: 1rem 1.5rem 1rem 1rem;
      background-color: #fff;
      box-shadow: var(--shadow-light);
    }

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      // text-decoration-thickness: 2px;
    }

    .icon {
      color: var(--primary-blue);
    }

    &_features {
      display: none;

      @media all and (max-width: 420px) {
        margin-left: auto;
        margin-right: 0.5rem;
        display: flex;
        gap: 1.5rem;
      }

      &_icon {
        .icon {
          width: 50px;
          height: 50px;
          border-radius: var(--round);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.5rem;

          &--add {
            background-color: var(--primary-blue);
            color: #fff;
          }

          &--manage {
            border: 2px solid var(--secondary-blue-2);
          }
        }

        &:nth-child(2) {
          position: relative;
        }

        &_notify {
          position: absolute;
          top: 0;
          right: 0;

          transform: translate(50%, -50%);

          width: 55px;
          height: 30px;
          border-radius: 27px;
          background-color: var(--accent-red);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 14px;
          font-weight: 600;
          color: #fff;
          border: 3px solid #fff;
          transition: all 0.09s ease-in-out;
        }
      }
    }
  }

  &_content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;

    @media screen and (max-width: 420px) {
      gap: 3rem;
      grid-template-columns: 1fr;
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
