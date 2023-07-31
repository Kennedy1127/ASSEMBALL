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
      v-for="data in topProductData"
      :key="data"
      @click="goToProducts(data.product_id)"
    >
      <h2 class="home_product_all_top_title">{{ data.top }}</h2>
      <div class="home_product_all_top_pic">
        <img :src="data.imgUrl" alt="product" />
      </div>
      <h3 class="home_product_all_top_name">
        {{ data.productName }}
      </h3>
      <div class="home_product_all_top_date">{{ data.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topProductData: [
        {
          top: "TOP2",
          imgUrl: require("@/assets/images/index/product_top02.jpg"),
          productName: "高品質二手棒球護具套裝",
          date: "2023-05-19",
          product_id: "64c09a3e4b8f780513fbf2f4",
        },
        {
          top: "TOP1",
          imgUrl: require("@/assets/images/index/product_top01.jpg"),
          productName: "精選二手棒球珍品",
          date: "2023-07-29",
          product_id: "64c09a3e63fb8e32470551e5",
        },
        {
          top: "TOP3",
          imgUrl: require("@/assets/images/index/product_top03.jpg"),
          productName: "品牌投手手套尋找新主人",
          date: "2023-06-09",
          product_id: "64c09a3efe9f0f5052cb66c4",
        },
      ],
    };
  },
  methods: {
    goToProducts(id) {
      this.$router.push({ name: "ProductDetail", params: { id } });
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
    margin: 2% 3% 0 3%;
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
      order: -1;
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
