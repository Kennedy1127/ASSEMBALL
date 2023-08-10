<template>
  <section class="product_main_detail">
    <div class="product_main_detail_pic">
      <div class="product_main_detail_pic_big">
        <img
          :src="pics[picIndex] || require('@/assets/loading/loading.gif')"
          alt="productdetail_pic main"
        />
      </div>
      <div class="product_main_detail_pic_all">
        <div
          v-for="index in 4"
          :key="index"
          class="product_main_detail_pic_all_small"
          @click="swapPic(index - 1)"
        >
          <img
            :src="pics[index - 1] || require('@/assets/loading/loading.gif')"
            alt="productdetail_pic"
          />
        </div>
      </div>
    </div>

    <div class="product_main_detail_content">
      <div class="product_main_detail_content_title">
        <span>{{ productData.title }}</span>
      </div>
      <div
        v-for="(item, index) in renderProductItems"
        :key="index"
        class="product_main_detail_content_body"
      >
        {{ item.title }} {{ item.text }}
      </div>

      <div class="detail_footer">
        <div class="detail_price">NT$ {{ renderProductPrice }}</div>
        <router-link
          v-if="productData.seller_id !== auth.currentUser?.uid"
          :to="{ name: 'ProductPayment', query: { id: productData.id } }"
        >
          <button>我要購買</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import productTags from "@/composables/tables/productTags";
import { auth } from "@/firebase/config";
import getData from "@/composables/data/getData";
import useStorage from "@/composables/data/useStorage";
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
});
const { getDocument } = getData();
const { getPicsLink } = useStorage();

onMounted(async () => {
  pics.value = [
    ...(await getPicsLink(
      4,
      `images/PRODUCTS/${props.productData.id}`,
      "product"
    )),
  ];

  const seller = await getDocument("MEMBERS", props.productData.seller_id);
  props.productData.seller_name = seller.lastname + seller.firstname;
});

const pics = ref([]);
const picIndex = ref(0);

const renderProductItems = computed(() => [
  {
    title: "刊登日期 : ",
    text: convertDate(props.productData.date.toDate()),
  },
  { title: "類別 : ", text: productTags[props.productData.tag] },
  { title: "刊登者 : ", text: props.productData.seller_name },
  { title: "縣市 : ", text: props.productData.area },
  { title: "Email : ", text: props.productData.email },
  { title: "Phone : ", text: props.productData.phone },
]);

const renderProductPrice = computed(() =>
  convertPrice(props.productData.price)
);

const convertDate = (copywritingDate) => {
  if (!copywritingDate) return;
  const date = new Date(copywritingDate);
  return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )} / ${String(date.getDate()).padStart(2, "0")}`;
};

const convertPrice = (price) => {
  return Number(price).toLocaleString();
};

const swapPic = (index) => {
  picIndex.value = index;
};
</script>

<style scoped lang="scss">
.product_main {
  &_detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media all and (max-width: 420px) {
      flex-direction: column;
    }

    &_pic {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding-left: 2rem;

      @media all and (max-width: 420px) {
        width: 100%;
        padding-left: 0;
      }

      &_big {
        width: 100%;
        height: 360px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &_all {
        width: 100%;
        display: flex;
        padding-top: 1rem;
        gap: 0.75rem;
        &_small {
          width: 25%;
          height: 80px;
          cursor: pointer;
          & img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }
        }
      }
    }

    &_content {
      width: 40%;
      margin-left: 2rem;

      @media all and (max-width: 420px) {
        width: 100%;
        margin-left: 0;
        margin-top: 1.5rem;
      }

      &_title {
        padding-bottom: 2rem;

        @media all and (max-width: 420px) {
          padding-bottom: 1.5rem;
        }

        & span {
          color: var(--primary-black);
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 1.5px;

          @media all and (max-width: 420px) {
            font-size: 1.5rem;
          }
        }
      }

      &_body {
        color: var(--secondary-gray-1);
        padding: 0.75rem 0.75rem 0.75rem 0;
        border-bottom: 2px solid var(--secondary-gray-2);
        letter-spacing: 1.5px;
      }
    }
    .detail_footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      @media all and (max-width: 420px) {
        flex-direction: column;
        align-items: initial;
        justify-content: initial;
      }
      .detail_price {
        font-weight: 500;
        letter-spacing: 1.5px;
        font-size: 1.75rem;
        color: var(--error-red);
        padding-top: 3rem;

        @media all and (max-width: 420px) {
          font-size: 1.5rem;
          padding-top: 1.5rem;
        }
      }

      & a {
        & button {
          width: 150px;
          height: 50px;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 6px;
          border-radius: var(--round);
          color: #ffffff;
          background-color: var(--error-yellow);
          transition: all 0.09s ease-in-out;

          @media all and (max-width: 420px) {
            margin-top: 2rem;
            width: 100%;
          }
        }
        & button:hover {
          background-color: var(--error-red);
        }
      }
    }
  }
}
</style>
