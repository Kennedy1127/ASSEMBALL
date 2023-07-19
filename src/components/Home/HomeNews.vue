<template>
  <div class="home_news_subscription">
    <h2>
      <router-link to="/">最新消息</router-link>
    </h2>
    <p>訂閱我們即可接收電子報</p>
    <div class="home_news_subscription_importing">
      <input type="email" placeholder="Email" />
    </div>
    <div class="home_news_subscription_hashtag">
      <div
        class="home_news_subscription_hashtag_text"
        v-for="item in newsHashtag"
        :key="item"
      >
        <router-link to="/">{{ item }}</router-link>
      </div>
    </div>
  </div>
  <div class="home_news_all">
    <h2>NEWS</h2>
    <div class="home_news_all_card">
      <main class="carousel" @click="init">
        <ul class="carousel-list">
          <button class="carousel-prev" @click="carouselPrev">prev</button>
          <button class="carousel-next" @click="carouselNext">next</button>

          <li
            v-for="(itemData, index) in itemsData"
            :key="index"
            class="carousel-item"
            :data-pos="itemData.pos"
            ref="items"
          >
            <div class="carousel-content">
              <div class="carousel-title">{{ "title" + index }}</div>
              <div class="carousel-pic"></div>
              <div class="carousel-btn"></div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
  <div class="home_news_background">
    <img
      class="product_message_area_all_pic_mark"
      src="~@/assets/images/background/news_background.png"
      alt="mark"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsHashtag: [
        "＃天龍國野馬",
        "＃波士頓爆豪客",
        "＃信義天使",
        "＃中壢區勇士",
        "＃大安藍鳥",
        "＃敦化南路火箭",
        "＃中山區鷹眼",
        "＃密爾瓦基釀酒人",
        "＃辛辛那提奪旗者",
        "＃金山自由人",
        "＃克里夫蘭閃電",
        "＃吳興街紡織者",
      ],
      itemsData: [
        { pos: -2, imgSrc: "https://picsum.photos/id/100/700/500" },
        { pos: -1, imgSrc: "https://picsum.photos/id/154/700/500" },
        { pos: 0, imgSrc: "https://picsum.photos/id/38/700/500" },
        { pos: 1, imgSrc: "https://picsum.photos/id/173/700/500" },
        { pos: 2, imgSrc: "https://picsum.photos/id/44/700/500" },
      ],
    };
  },

  methods: {
    carouselPrev() {
      for (const item of this.$refs.items) {
        const itemPos = Number(item.dataset.pos);

        itemPos === -2
          ? (item.dataset.pos = 2)
          : (item.dataset.pos = itemPos - 1);
      }
    },

    carouselNext() {
      for (const item of this.$refs.items) {
        const itemPos = Number(item.dataset.pos);

        itemPos === 2
          ? (item.dataset.pos = -2)
          : (item.dataset.pos = itemPos + 1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home_news_subscription {
  width: 30%;
  border-right: 3px solid var(--primary-blue);
  & h2 {
    padding-top: 4rem;
    font-size: 2.5rem;
    a {
      color: var(--primary-blue);
    }
  }
  & p {
    font-size: 1.25rem;
  }
  &_importing {
    margin-top: 1rem;
    & input {
      width: 60%;
      height: 40px;
      border-radius: 30px;
      padding: 1rem;
      border: 2px solid var(--primary-blue);
      background-color: var(--primary-blue);
      color: #fff;
      &::placeholder {
        font-size: 1rem;
        color: #ffffffe7;
        font-family: "Montserrat";
      }
    }
  }
  &_hashtag {
    margin-top: 1rem;
    margin-bottom: 4rem;
    &_text {
      margin-top: 0.5rem;
      font-size: 1rem;
      & :hover {
        transform: scale(1.2);
        font-weight: 500;
      }
      & a {
        color: var(--primary-blue);
      }
    }
  }
}
.home_news_all {
  width: 70%;
  & h2 {
    margin-top: 1rem;
    font-size: 96px;
    font-family: "Montserrat";
  }
  &_card {
    .carousel {
      margin-top: 1rem; // 可改
    }

    .carousel-list {
      position: relative;
      list-style-type: none;
      display: flex;
      justify-content: center;

      width: 300px; // 寬度影響左右方向鍵位置，更改時要注意
      margin: 0 auto;
    }

    .carousel-prev,
    .carousel-next {
      width: 50px; // 測試
      height: 50px; // 測試
      position: absolute;
      z-index: 10;
    }

    .carousel-prev {
      left: 0;
    }

    .carousel-next {
      right: 0;
    }

    .carousel-item {
      position: absolute;
      transition: transform 500ms;
      background-color: #fff;

      width: 320px; // 可改
      min-height: 400px; // 可改 注意標題長度

      border: 1px solid #000; // 測試
    }

    li[data-pos="0"] {
      z-index: 9;
    }
    li[data-pos="-1"],
    li[data-pos="1"] {
      z-index: 6;
    }
    li[data-pos="-2"],
    li[data-pos="2"] {
      z-index: 3;
    }

    li[data-pos="-1"] {
      transform: translateX(-50%) scale(0.9);
    }
    li[data-pos="1"] {
      transform: translateX(50%) scale(0.9);
    }
    li[data-pos="-2"] {
      transform: translateX(-90%) scale(0.8);
    }
    li[data-pos="2"] {
      transform: translateX(90%) scale(0.8);
    }

    li[data-pos="-1"]::after,
    li[data-pos="1"]::after {
      background-color: rgba(0, 0, 0, 0.25);
    }
    li[data-pos="-2"]::after,
    li[data-pos="2"]::after {
      background-color: rgba(0, 0, 0, 0.5);
    }

    // 這裡開始可以放carousel中的內容

    .carousel-pic {
      width: 100%; // 測試
      height: 300px; // 測試
      background-color: #fa0; // 測試
    }
  }
}
.home_news_background {
  width: 35%;
  position: absolute;
  left: 12%;
  top: 12%;
  z-index: -1;
  animation: rotate-taichi 5s infinite linear;
  & img {
    width: 100%;
  }
  @keyframes rotate-taichi {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
