<template>
  <section class="product_main_detail">
    <div class="product_main_detail_pic">
      <img
        src="~@/assets/images/products/productdetail_pic1.png"
        alt="productdetail_pic1"
      />
      <div class="product_main_detail_pic_all">
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
      </div>
    </div>
    <div class="product_main_detail_content">
      <div class="product_main_detail_content_title">
        <span>{{ renderProductTitle }}</span>
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
        <router-link :to="{ name: 'ProductPayment' }">
          <button>我要購買</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import productTags from "@/composables/tables/productTags";
import { computed } from "vue";

const props = defineProps({
  productItemData: {
    type: Object,
    required: true,
  },
});

console.log(props.productItemData);

const renderProductTitle = computed(() => props.productItemData.product_title);

const renderProductItems = computed(() => [
  {
    title: "刊登日期 : ",
    text: convertDate(props.productItemData.product_date),
  },
  { title: "類別 : ", text: productTags[props.productItemData.product_tag] },
  { title: "刊登者 : ", text: props.productItemData.product_seller_name },
  { title: "縣市 : ", text: props.productItemData.product_area },
  { title: "Email : ", text: props.productItemData.product_email },
  { title: "Phone : ", text: props.productItemData.product_phone },
]);

const renderProductPrice = computed(() =>
  convertPrice(props.productItemData.product_price)
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
  return price.toLocaleString();
};
</script>

<style scoped lang="scss">
.product_main {
  &_detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &_pic {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      &_all {
        width: 100%;
        display: flex;
        padding-top: 1rem;
        gap: 0.75rem;
        &_small {
          width: 25%;
          & img {
            width: 100%;
            display: block;
          }
        }
      }
    }
    &_content {
      width: 80%;
      margin-left: 2rem;
      &_title {
        padding-bottom: 2rem;
        & span {
          color: var(--primary-black);
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 1.5px;
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
      .detail_price {
        font-weight: 500;
        letter-spacing: 1.5px;
        font-size: 1.75rem;
        color: var(--error-red);
        padding-top: 3rem;
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
        }
        & button:hover {
          background-color: var(--error-red);
        }
      }
    }
  }
}
</style>
