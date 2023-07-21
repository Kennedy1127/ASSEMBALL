<template>
  <div class="home_news_subscription">
    <h2>
      <router-link to="/">最新消息</router-link>
    </h2>
    <p>訂閱我們即可接收電子報</p>
    <div class="home_news_subscription_importing">
      <input type="email" placeholder="Email" />
      <span>
        <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
      </span>
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
    <main class="home_news_all_carousel" @click="init">
      <ul class="home_news_all_carousel_list">
        <li
          v-for="(itemData, index) in itemsData"
          :key="index"
          class="home_news_all_carousel_list_item"
          :data-pos="itemData.pos"
          ref="items"
        >
          <!-- carousel -->
          <div class="carousel_content">
            <div class="carousel_content_title">
              {{ itemData.title }}<br /><span>{{ itemData.date }}</span>
            </div>
            <div class="carousel_content_pic">
              <img :src="itemData.imgSrc" alt="Image" />
            </div>
            <button
              :key="itemData.pos"
              v-show="itemData.pos == 0"
              @click.stop="openModal(itemData.id)"
            >
              <Icon type="ios-baseball-outline" />MORE
            </button>
          </div>
        </li>
        <!-- modal -->
        <div class="modal" v-if="modalIsOpen" @click="closeModal">
          <div class="modal_content" ref="items">
            <div class="modal_content_close" @click="closeModal">
              <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            </div>
            <div class="modal_content_title">
              <div></div>
              {{ computedModalData.title }}
              <span>{{ computedModalData.date }}</span>
            </div>
            <div class="modal_content_pic">
              <img :src="computedModalData.bigImgSrc" alt="Image" />
            </div>
            <div class="modal_content_text">
              {{ computedModalData.text }}
            </div>
          </div>
        </div>
        <div class="carousel_prev" @click="carouselPrev">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </div>
        <div class="carousel_next" @click="carouselNext">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
      </ul>
    </main>
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
        {
          id: 0,
          pos: -2,
          imgSrc: require("@/assets/images/index/news_pic_04.jpg"),
          title: "史上最精彩比賽！經典對決震撼球迷",
          date: "2023 - 06 - 12",
          bigImgSrc: require("@/assets/images/index/news_pic_04.jpg"),
          text: "在防守比賽中，兩支球隊的表演都展現出了驚人的實力和技巧。整場比賽都充滿了懸念和戲劇性，引人矚目，以萬計的觀眾觀看直播。雖然天氣炎熱，隊員們卻熱情高漲是高漲的。他們快速奔跑、擊球、投球，讓球場充滿活力。比賽中，兩支隊伍不分上下，每一分都奮力拼搏，緊張的隊伍讓現場觀眾屏息凝視。最後，經過角逐，一方獲得了勝利，讓整個球場沸騰了。失落，但他們也表現出了運動家精神，互相擁抱，互相鼓勵。這場盛典慶祝了史上最精彩的對決之一，無論勝負，每位隊員都值得讚揚。他們的努力、汗水和奉獻都成為球迷心中永恆的記憶。",
        },
        {
          id: 1,
          pos: -1,
          imgSrc: require("@/assets/images/index/news_pic_01.jpg"),
          title: "重返巔峰！賽季中球隊展現無敵氣勢",
          date: "2023 - 06 - 17",
          bigImgSrc: require("@/assets/images/index/news_pic_04.jpg"),
          text: "123",
        },
        {
          id: 2,
          pos: 0,
          imgSrc: require("@/assets/images/index/news_pic_02.jpg"),
          title: "新秀耀眼！年輕球員成為球隊的希望",
          date: "2023 - 07 - 28",
          bigImgSrc: require("@/assets/images/index/news_pic_04.jpg"),
          text: "123",
        },
        {
          id: 3,
          pos: 1,
          imgSrc: require("@/assets/images/index/news_pic_03.jpg"),
          title: "隊長的領袖魅力！球場上的靈魂人物",
          date: "2023 - 07 - 31",
          bigImgSrc: require("@/assets/images/index/news_pic_04.jpg"),
          text: "123",
        },
        {
          id: 4,
          pos: 2,
          imgSrc: require("@/assets/images/index/news_pic_05.jpg"),
          title: "團隊合作攜手奪冠！球隊的成功秘訣",
          date: "2023 - 08 - 02",
          bigImgSrc: require("@/assets/images/index/news_pic_04.jpg"),
          text: "123",
        },
      ],
      modalData: {
        title: "",
        imgSrc: "",
        date: "",
        text: "",
      },
      selectedItemIndex: null,
      modalIsOpen: false,
    };
  },

  computed: {
    computedModalData() {
      return this.modalData;
    },
  },

  methods: {
    carouselPrev() {
      for (const item of this.itemsData) {
        const itemPos = Number(item.pos);

        itemPos === -2 ? (item.pos = 2) : (item.pos = itemPos - 1);
      }
    },

    carouselNext() {
      for (const item of this.itemsData) {
        const itemPos = Number(item.pos);

        itemPos === 2 ? (item.pos = -2) : (item.pos = itemPos + 1);
      }
    },
    openModal(id) {
      // Modified to accept itemIndex instead of itemData
      this.modalIsOpen = true; // Store the index of the clicked item
      const data = this.itemsData.find((item) => item.id === id);
      console.log(data);
      this.modalData.title = data.title;
      this.modalData.date = data.date;
      this.modalData.bigImgSrc = data.bigImgSrc;
      this.modalData.text = data.text;
    },

    closeModal() {
      this.modalIsOpen = false; // Reset the selected item index to hide the modal
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
    position: relative;
    & input {
      width: 60%;
      height: 40px;
      border-radius: 30px;
      padding: 1.25rem;
      border: 2px solid var(--primary-blue);
      background-color: var(--primary-blue);
      color: #fff;
      &::placeholder {
        font-size: 1rem;
        color: #ffffffe7;
        font-family: "Montserrat";
      }
    }
    & span {
      font-size: 1.25rem;
      z-index: 2;
      color: #fff;
      position: absolute;
      top: 0.45rem;
      right: 25%;
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
  position: relative;
  & h2 {
    margin-top: 1rem;
    font-size: 96px;
    font-family: "Montserrat";
  }
  &_carousel {
    margin-top: 1rem; // 可改
    &_list {
      position: relative;
      list-style-type: none;
      display: flex;
      justify-content: center;
      width: 285px; // 寬度影響左右方向鍵位置，更改時要注意
      margin: 0 auto;
      li[data-pos="0"] {
        z-index: 9;
        & button {
          background-color: var(--primary-blue);
          color: #fff;
        }
        & button:hover {
          background-color: #fff;
          color: var(--primary-blue);
        }
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
      &_item {
        position: absolute;
        transition: transform 500ms;
        background-color: #fff;

        width: 320px; // 可改
        min-height: 400px; // 可改 注意標題長度

        border: 3px solid var(--primary-blue);
        background-color: var(--secondary-blue-4);

        .carousel_content {
          padding: 1rem;
          &_title {
            margin-top: 0.75rem;
            font-size: 1rem;
            font-weight: 600;
            & span {
              font-weight: 200;
            }
          }
          &_pic {
            width: 85%;
            margin: auto;
            margin-top: 0.75rem;
            & img {
              width: 100%;
            }
          }
          & button {
            width: 8rem;
            height: 2.5rem;
            font-size: 1.25rem;
            margin-top: 1rem;
            border-radius: 30px;
            border: 1px solid var(--primary-blue);
            background-color: #fff;
            color: var(--primary-blue);
            font-family: "Montserrat";
            & i {
              font-size: 1.5rem;
              margin-right: 0.25rem;
            }
          }
          & button:hover {
            border: 1px solid var(--primary-blue);
            background-color: var(--primary-blue);
            color: #fff;
            vertical-align: middle;
          }
        }
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        &_content {
          background-color: var(--secondary-blue-4);
          padding: 2rem;
          border-radius: var(--round);
          position: relative;
          width: 60%;
          height: 70vh;
          overflow: auto;
          box-shadow: var(--shadow-wide);
          margin-top: 15vh;
          &_close {
            position: absolute;
            top: 1rem;
            right: 2rem;
            font-size: 2rem;
            cursor: pointer;
          }
          &_title {
            & span {
            }
          }
          &_pic {
            width: 70%;
            & img {
              width: 100%;
            }
          }
          &_text {
          }
        }
      }
      .carousel_prev,
      .carousel_next {
        position: absolute;
        z-index: 10;
        background-color: none;
        font-size: 1.5rem;
        color: var(--primary-blue);
        cursor: pointer;
      }
      .carousel_prev {
        top: 188px;
        left: 0px;
      }
      .carousel_next {
        right: 0px;
        top: 188px;
      }
    }

    // 這裡開始可以放carousel中的內容
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
