<template>
  <div class="home_news_subscription">
    <h2>最新消息</h2>
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
        <router-link :to="{ name: 'Recruitments' }">{{ item }}</router-link>
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
              {{ itemData.title }}<br />{{ itemData.titleBreakpoint }}
              <p>{{ itemData.date }}</p>
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
        <div class="modal" v-if="modalIsOpen">
          <div class="modal_content" ref="items">
            <div class="modal_content_close" @click="closeModal">
              <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            </div>
            <div class="modal_content_title">
              <div class="modal_content_title_block"></div>
              <div class="modal_content_title_text">
                <h3>
                  {{ computedModalData.title }}<br />{{
                    computedModalData.titleBreakpoint
                  }}
                </h3>
                <p>{{ computedModalData.date }}</p>
              </div>
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
          title: "史上最精彩比賽！",
          titleBreakpoint: "經典對決震撼球迷",
          date: "2023 - 06 - 12",
          bigImgSrc: require("@/assets/images/index/news_big_pic_04.jpg"),
          text: "在防守比賽中，兩支球隊的表演都展現出了驚人的實力和技巧。整場比賽都充滿了懸念和戲劇性，引人矚目，以萬計的觀眾觀看直播。雖然天氣炎熱，隊員們卻熱情高漲是高漲的。他們快速奔跑、擊球、投球，讓球場充滿活力。比賽中，兩支隊伍不分上下，每一分都奮力拼搏，緊張的隊伍讓現場觀眾屏息凝視。最後，經過角逐，一方獲得了勝利，讓整個球場沸騰了。失落，但他們也表現出了運動家精神，互相擁抱，互相鼓勵。這場盛典慶祝了史上最精彩的對決之一，無論勝負，每位隊員都值得讚揚。他們的努力、汗水和奉獻都成為球迷心中永恆的記憶。",
        },
        {
          id: 1,
          pos: -1,
          imgSrc: require("@/assets/images/index/news_pic_01.jpg"),
          title: "重返巔峰！",
          titleBreakpoint: "賽季中球隊展現無敵氣勢",
          date: "2023 - 06 - 17",
          bigImgSrc: require("@/assets/images/index/news_big_pic_01.jpg"),
          text: "這個賽季，這支棒球隊以強大的實力和無敵的氣勢重新回到了巔峰。經過多年的努力和訓練，他們終於找到了適合自己的戰術和球員配置。每場比賽都能看到他們的精湛配合和卓越表現。球隊的主教練是他們成功的重要關鍵，他在戰術安排和心理激勵上做得非常出色。而球員們也全力以赴，發揮出個人的最佳水平。他們在比賽中互相配合，彼此信任，形成了無懈可擊的整體實力。在賽季中，這支球隊獲得了一連串的勝利，迎來了高潮。球迷們也對他們的表現感到驚嘆和自豪，球場上的加油聲此起彼落。每一場比賽都成為他們精彩人生的一部分，也為他們贏得了無數的掌聲和讚美。",
        },
        {
          id: 2,
          pos: 0,
          imgSrc: require("@/assets/images/index/news_pic_02.jpg"),
          title: "新秀耀眼！",
          titleBreakpoint: "年輕球員成為球隊的希望",
          date: "2023 - 07 - 28",
          bigImgSrc: require("@/assets/images/index/news_big_pic_02.jpg"),
          text: "在這支球隊中，一位年輕的新秀球員嶄露頭角，成為了球隊的新希望。雖然他在球隊中賽龍躍馬，但他卻展現出了驚人的天賦和實力。他的出現為整個球隊注入了新的生機和能量。這位新秀球員不僅在守備上做得出色，而且在攻擊方面也表現出色。他總能在關鍵時刻挺身而出，帶領球隊向勝利進軍。在他的帶領下，球隊的整體實力也得到了提升，成績有了明顯的進步。儘管他還很年輕，但這位新秀球員已經成為球迷心中的寵兒。他們期待著他未來更加耀眼的表現，相信他將成為球隊的核心球員，帶領球隊走向更多的勝利。",
        },
        {
          id: 3,
          pos: 1,
          imgSrc: require("@/assets/images/index/news_pic_03.jpg"),
          title: "隊長的領袖魅力！",
          titleBreakpoint: "球場上的靈魂人物",
          date: "2023 - 07 - 31",
          bigImgSrc: require("@/assets/images/index/news_big_pic_03.jpg"),
          text: "這支球隊的隊長是一位充滿領袖魅力的球員，他在球場上總是發揮著關鍵的作用。無論是在場上還是場下，他都能以身作則，帶領著全隊向前。這位隊長是一個堅毅而又有魄力的球員。他在比賽中從不退縮，無論面對多麼艱難的局面，他總是能挺身而出，帶領球隊走向勝利。同時，他也是球隊中的榜樣，鼓勵著其他球員不斷進步。在場下，這位隊長也是球隊的靈魂人物。他時刻關心著每一位隊員，關心他們的生活和訓練情況。他總是以身作則，傳遞著正能量，讓整個球隊形成了和諧的氛圍。這位隊長的領袖魅力不僅贏得了球隊的尊敬和愛戴，也贏得了球迷的喜愛和支持。他是球隊的靈魂，也是球迷心中永遠的英雄。",
        },
        {
          id: 4,
          pos: 2,
          imgSrc: require("@/assets/images/index/news_pic_05.jpg"),
          title: "團隊合作攜手奪冠！",
          titleBreakpoint: "球隊的成功秘訣",
          date: "2023 - 08 - 02",
          bigImgSrc: require("@/assets/images/index/news_big_pic_05.jpg"),
          text: "這支球隊的成功不僅來自於個人的實力，更來自於團隊的合作和默契。他們深知只有攜手合作，才能戰勝強大的對手，走向勝利的巔峰。球隊中的每一位球員都瞭解自己的角色和責任，他們在場上相互扶持，場下互相鼓勵。每場比賽都是一場團隊的戰役，每一分都是團隊的努力成果。主教練和教練團也發揮了重要的作用。他們在訓練中注重團隊合作，提倡相互幫助，讓球員們建立起了牢固的信任。在比賽中，球隊的戰術和配合也得到了充分的發揮。正是因為這種團隊合作的精神，這支球隊在比賽中屢創佳績，最終奪得了冠軍的榮譽。他們的成功證明了團隊合作的重要性，也激勵著更多的球隊去追求卓越。",
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

      this.modalData.title = data.title;
      this.modalData.titleBreakpoint = data.titleBreakpoint;
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
      outline: none;
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
      cursor: pointer;
    }
  }
  &_hashtag {
    margin-top: 1rem;
    margin-bottom: 4rem;
    &_text {
      margin-top: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      & :hover {
        transform: scale(1.2);
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
  &_carousel {
    width: 100%;
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
        border-radius: var(--round);
        box-shadow: var(--shadow-wide);

        .carousel_content {
          width: 100%;
          padding: 1rem;
          &_title {
            margin-top: 0.75rem;
            font-size: 1rem;
            font-weight: 600;
            & p {
              font-weight: 200;
            }
            & br {
              display: none;
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
          height: 75vh;
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
            display: flex;
            align-items: end;
            &_block {
              width: 16px;
              height: 30px;
              background-color: var(--primary-blue);
            }
            &_text {
              display: flex;
              align-items: end;
              margin-left: 1rem;
              & h3 {
                font-size: 1.25rem;
                font-weight: 500;
              }
              & p {
                font-size: 1rem;
                margin-left: 1rem;
              }
              & br {
                display: none;
              }
            }
          }
          &_pic {
            width: 90%;
            margin-top: 1rem;
            & img {
              width: 100%;
            }
          }
          &_text {
            width: 90%;
            text-align: left;
            margin-top: 0.5rem;
            text-indent: 2rem;
            font-size: 1rem;
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
  top: 10%;
  z-index: -1;
  animation: rotate-taichi 5s infinite linear;
  user-select: none;
  // animation: rotate-taichi02 4s cubic-bezier(0.2, 0.9, 0.3, 1.3) infinite;

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
  // @keyframes rotate-taichi02 {
  //   0% {
  //     transform: scale(0.75);
  //   }
  //   50% {
  //     transform: rotate(180deg) scale(1);
  //   }
  //   100% {
  //     transform: rotate(360deg) scale(1.25);
  //   }
  // }
}
@media screen and (max-width: 420px) {
  .home_news_subscription {
    width: 100%;
    border-right: 0px;
    & h2 {
      padding-top: 2rem;
    }
    & p {
    }
    &_importing {
      & input {
        &::placeholder {
        }
      }
      & span {
      }
    }
    &_hashtag {
      display: none;
    }
  }
  .home_news_all {
    width: 100%;
    overflow: hidden;
    & h2 {
      margin-top: 2.5rem;
      font-size: 96px;
      font-family: "Montserrat";
    }
    &_carousel {
      margin-top: 0rem;
      height: 60vh;
      &_list {
        position: relative;
        list-style-type: none;
        display: flex;
        justify-content: center;
        width: 320px; // 寬度影響左右方向鍵位置，更改時要注意
        margin: 0 auto;
        // overflow: hidden;
        &_item {
          position: absolute;
          transition: transform 500ms;
          background-color: #fff;
          width: 350px; // 可改
          min-height: 450px; // 可改 注意標題長度

          .carousel_content {
            padding: 1rem;
            &_title {
              margin-top: 0.5rem;
              font-size: 1.25rem;
              font-weight: 600;
              & p {
                font-size: 1rem;
                font-weight: 300;
              }
              & br {
                display: block;
              }
            }
            &_pic {
              width: 85%;
              margin: auto;
              margin-top: 0.5rem;
            }
          }
        }
        .modal {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: center;
          &_content {
            padding: 1.25rem;
            position: relative;
            width: 90%;
            height: 80vh;
            margin: auto;
            margin-top: 15vh;
            &_close {
              position: absolute;
              top: 0.75rem;
              right: 1.25rem;
              font-size: 2rem;
              cursor: pointer;
            }
            &_title {
              width: 90%;
              display: flex;
              align-items: start;
              &_block {
                width: 16px;
                height: 60px;
                background-color: var(--primary-blue);
              }
              &_text {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 1rem;
                text-align: left;
                & h3 {
                }
                & br {
                  display: block;
                }
                & p {
                  margin-left: 0;
                }
              }
            }
            &_pic {
              width: 100%;
              margin-top: 1rem;
              & img {
                width: 100%;
              }
            }
            &_text {
              width: 100%;
              text-align: left;
              margin-top: 0.5rem;
              text-indent: 2rem;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
  .home_news_background {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 8%;
    z-index: -1;
    animation: rotate-taichi 5s infinite linear;
  }
}
</style>
