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
    >
      <h2 class="home_product_all_top_title">{{ data.top }}</h2>
      <div class="home_product_all_top_pic">
        <img :src="data.imgUrl" alt="product" />
      </div>
      <h3 class="home_product_all_top_name">{{ data.productName }}</h3>
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
        },
        {
          top: "TOP1",
          imgUrl: require("@/assets/images/index/product_top01.jpg"),
          productName: "精選二手棒球珍品",
          date: "2023-07-29",
        },
        {
          top: "TOP3",
          imgUrl: require("@/assets/images/index/product_top03.jpg"),
          productName: "品牌投手手套尋找新主人",
          date: "2023-06-09",
        },
      ],
    };
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
  padding-bottom: 2rem;
  text-align: center;
  &_top {
    width: 20%;
    margin-top: 10%;
    &_title {
      font-size: 96px;
      color: #ffffff7b;
      line-height: 1.25;
    }
    &_pic {
      width: 80%;
      margin: auto;
      & img {
        width: 100%;
        box-shadow: var(--shadow-wide);
      }
    }
    &_name {
      margin-top: 0.5rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;
    }
    &_date {
      font-size: 1rem;
      color: #fff;
    }
  }
  &_top:nth-child(2) {
    margin: 2% 3% 0 3%;
  }
}
</style>
