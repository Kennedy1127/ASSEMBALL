<template>
  <div class="home_product_cloudleft">
    <img
      class="home_message_all_pic_img_phone"
      src="~@/assets/images/index/product_cloudleft.svg"
      alt="cloud"
    />
  </div>
  <div class="home_product_sun">
    <img
      class="home_message_all_pic_img_phone"
      src="~@/assets/images/index/product_sun.svg"
      alt="sun"
    />
  </div>
  <div class="home_product_cloudright">
    <img
      class="home_message_all_pic_img_phone"
      src="~@/assets/images/index/product_cloudright.svg"
      alt="cloud"
    />
  </div>
  <div class="home_product_all">
    <div
      class="home_product_all_top"
      v-for="item in ProductPaymentItems"
      :key="item.id"
      @click="goToProducts(item.id)"
    >
      <h2 class="home_product_all_top_title">TOP{{ item.top }}</h2>
      <div class="home_product_all_top_pic">
        <img :src="item.imgSrc" alt="ProductPayment_form_item_pic" />
      </div>
      <h3 class="home_product_all_top_name">
        {{ item.title }}
      </h3>
      <div class="home_product_all_top_date">{{ item.formattedDate }}</div>
    </div>
  </div>
</template>

<script>
import getData from "@/composables/data/getData";
import useStorage from "@/composables/data/useStorage";

const { getDocuments } = getData();
const { getPicsLink } = useStorage();

export default {
  async mounted() {
    const productData = await getDocuments("PRODUCTS", [
      ["status", "==", true],
      ["top", "==", true],
    ]);
    console.log(productData);

    for (let i = 0; i < productData.length; i++) {
      const res = await getPicsLink(
        1,
        `images/PRODUCTS/${productData[i].id}`,
        "product"
      );

      productData[i].imgSrc = res[0];
      productData[i].top = i + 1;
      productData[i].formattedDate = this.convertDate(productData[i].date);
    }

    this.ProductPaymentItems = [...productData];
  },

  data() {
    return {
      picSrc: "", //商品圖
      ProductPaymentItems: [],
    };
  },
  methods: {
    goToProducts(id) {
      this.$router.push({ name: "ProductDetail", params: { productId: id } });
    },
    convertDate(msgDate) {
      if (!msgDate) return "";
      const date = msgDate.toDate ? msgDate.toDate() : new Date(msgDate);
      return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )} / ${String(date.getDate()).padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped lang="scss">
.home_product_cloudleft {
  width: 8%;
  position: absolute;
  bottom: 1%;
  left: 7%;
  animation: round;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 3s;
  & img {
    width: 100%;
  }
  @keyframes round {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-25%, 0);
    }
  }
}
.home_product_sun {
  width: 6%;
  position: absolute;
  bottom: 30%;
  right: 10%;
  animation: sun;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 4s;
  & img {
    width: 100%;
  }
  @keyframes sun {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) scale(1.5);
    }
  }
}
.home_product_cloudright {
  position: absolute;
  width: 10%;
  bottom: 10%;
  right: 6%;
  animation: round02;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 3.5s;
  & img {
    width: 100%;
  }
  @keyframes round02 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30%, 0);
    }
  }
}
.home_product_all {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  &_top {
    width: 20%;
    margin-top: 10%;
    cursor: pointer;
    &_title {
      font-size: 96px;
      color: var(--secondary-blue-2);
      line-height: 1.25;
    }
    &_pic {
      width: 85%;
      margin: auto;
      padding-bottom: 0;
      box-shadow: var(--shadow-wide);
      overflow: hidden;
      border-radius: var(--round);
      & img {
        width: 100%;
        height: 260px;
        transform: scale(1.05);
        transition: 0.5s;
      }
    }
    &_name {
      margin-top: 0.5rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;
      overflow: hidden;
      & a {
        color: #fff;
      }
    }
    &_date {
      font-size: 1rem;
      color: #fff;
    }
  }
  &_top:hover {
    .home_product_all_top_title {
      color: var(--accent-yellow);
    }
    .home_product_all_top_pic img {
      transform: scale(1.25);
    }
  }
  &_top:nth-child(1) {
    margin: 2% 3% 0 3%;
  }
  &_top:nth-child(2) {
    order: -1;
  }
}
@media screen and (max-width: 1280px) {
  .home_product_cloudleft {
    display: none;
  }
  .home_product_sun {
    display: none;
  }
  .home_product_cloudright {
    display: none;
  }
  .home_product_all {
    &_top {
      width: 25%;
    }
  }
}
@media screen and (max-width: 1024px) {
  .home_product_all {
    z-index: 2;
    &_top {
      width: 26%;
      &_title {
        font-size: 4rem;
      }
      &_name {
        font-size: 1rem;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .home_product_all {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    &_top {
      width: 90%;
      margin-top: 10%;
      cursor: pointer;
      position: relative;
      &_title {
        font-size: 96px;
        color: var(--secondary-blue-2);
        line-height: 1.25;
      }
      &_pic {
        width: 70%;
        margin: auto;
        padding-bottom: 0;
        box-shadow: var(--shadow-wide);
        overflow: hidden;
        border-radius: var(--round);
        & img {
          width: 100%;
          transform: scale(1.05);
          transition: 0.5s;
        }
      }
      &_name {
        margin-top: 0.5rem;
        font-size: 1.75rem;
        font-weight: 500;
        color: #fff;
        overflow: hidden;
        & a {
          color: #fff;
        }
      }
      &_date {
        font-size: 1.25rem;
        color: #fff;
      }
    }
    &_top:hover {
      .home_product_all_top_title {
        color: var(--accent-yellow);
      }
      .home_product_all_top_pic img {
        transform: scale(1.25);
      }
    }
    &_top:nth-child(2) {
      order: 0;
    }
    &_top:nth-child(3) {
      margin-bottom: 2rem;
    }
  }
}
@media screen and (max-width: 420px) {
  .home_product_cloudleft {
    display: none;
  }
  .home_product_sun {
    display: none;
  }
  .home_product_cloudright {
    display: none;
  }
  .home_product_all {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    &_top {
      width: 80%;
      margin-top: 10%;
      cursor: pointer;
      position: relative;
      &_title {
        font-size: 96px;
        color: var(--secondary-blue-2);
        line-height: 1.25;
        position: absolute;
        z-index: 2;
      }
      &_pic {
        width: 80%;
        margin: auto;
        padding-bottom: 0;
        box-shadow: var(--shadow-wide);
        overflow: hidden;
        border-radius: var(--round);
        & img {
          width: 100%;
          transform: scale(1.05);
          transition: 0.5s;
        }
      }
      &_name {
        margin-top: 0.5rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: #fff;
        overflow: hidden;
        & a {
          color: #fff;
        }
      }
      &_date {
        font-size: 1rem;
        color: #fff;
      }
    }
    &_top:hover {
      .home_product_all_top_title {
        color: var(--accent-yellow);
      }
      .home_product_all_top_pic img {
        transform: scale(1.25);
      }
    }
    &_top:nth-child(2) {
      margin-right: auto;
      order: 0;
      .home_product_all_top_title {
        bottom: 4rem;
        right: -3rem;
      }
    }
    &_top:nth-child(1) {
      margin-left: auto;
      .home_product_all_top_title {
        bottom: 4rem;
        left: -3rem;
      }
    }
    &_top:nth-child(3) {
      margin-right: auto;
      margin-bottom: 2rem;
      .home_product_all_top_title {
        bottom: 4rem;
        right: -3rem;
      }
    }
  }
}
</style>
