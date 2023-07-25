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
        <span>{{ productDetail.Title }}</span>
      </div>
      <div
        class="product_main_detail_content_body"
        v-for="item in productDetailBody"
        :key="item"
      >
        {{ item.title }}{{ item.text }}
      </div>
      <div class="detail_footer">
        <div class="detail_price">{{ productDetail.Price }}</div>
        <router-link :to="{ name: 'ProductPayment' }">
          <button>我要購買</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["productItemData"],

  data() {
    return {
      productDetail: {
        Title: "棒球界LV精品球棒",
        Price: "NT$4,500",
      },
      productDetailBody: [
        { title: "刊登日期 : ", text: "2023/07/06" },
        { title: "類別 : ", text: "球棒" },
        { title: "刊登者 : ", text: "棒球專家小羊" },
        { title: "縣市 : ", text: "新北市" },
        { title: "Email : ", text: "hawhaw052@gmail.com" },
        { title: "Phone : ", text: "0953299481" },
      ],
    };
  },
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
