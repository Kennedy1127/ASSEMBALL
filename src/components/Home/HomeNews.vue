<template>
  <div class="home_news_subscription">
    <h2>最新消息</h2>
    <p>訂閱我們即可接收電子報</p>
    <div class="home_news_subscription_importing">
      <input
        type="email"
        placeholder="請輸入Email"
        v-model="email"
        @input="clearEmailIfNeeded"
      />
      <span @click="subscribe">
        <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
      </span>
      <div v-if="subscribed" class="home_news_subscription_importing_popup">
        {{ subscribedMessage }}
      </div>
      <div
        v-if="!isValidEmail && attemptedToSubscribe"
        class="home_news_subscription_importing_errorpopup"
      >
        Email 格式錯誤
      </div>
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
              {{ itemData.title }}<br />{{ itemData.title_breakpoint }}
              <p>{{ itemData.formattedDate }}</p>
            </div>
            <div class="carousel_content_pic">
              <img :src="itemData.pic" alt="Image" />
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
                    computedModalData.title_breakpoint
                  }}
                </h3>
                <p>{{ computedModalData.formattedDate }}</p>
              </div>
            </div>
            <div class="modal_content_pic">
              <img :src="computedModalData.popup_pic" alt="Image" />
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
  async mounted() {
    const res = await this.$store.dispatch("getHomeNews");
    console.log(res);
    this.itemsData = res;

    const options = { year: "numeric", month: "numeric", day: "numeric" };
    for (const item of this.itemsData) {
      const timestamp = {
        seconds: item.date.seconds,
        nanoseconds: item.date.nanoseconds,
      };
      const date = new Date(timestamp.seconds * 1000);
      item.formattedDate = date.toLocaleDateString(undefined, options);
    }
  },

  data() {
    return {
      email: "",
      subscribed: false,
      isValidEmail: false,
      attemptedToSubscribe: false,
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
      itemsData: [],
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
    subscribedMessage() {
      return this.isValidEmail ? "已訂閱成功！" : "";
    },
  },

  methods: {
    clearEmailIfNeeded() {
      this.isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.email);
      if (this.email.endsWith("@gmail.com") && !this.subscribed) {
        return;
      }
    },
    subscribe() {
      if (this.isValidEmail) {
        // 只有當 isValidEmail 為 true 時才執行後續動作
        this.subscribed = true;
        this.attemptedToSubscribe = true;
        setTimeout(() => {
          this.subscribed = false;
          this.email = "";
        }, 2000);
      } else {
        this.attemptedToSubscribe = true;
      }
    },

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
      this.modalData.title_breakpoint = data.title_breakpoint;
      this.modalData.formattedDate = data.formattedDate;
      this.modalData.popup_pic = data.popup_pic;
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
    &_popup {
      color: var(--success-green);
    }
    &_errorpopup {
      color: var(--accent-red);
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
              height: 220px;
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
            transition: 0.3s & i {
              font-size: 1.5rem;
              margin-right: 0.25rem;
            }
          }
          & button:hover {
            border: 1px solid var(--primary-blue);
            background-color: var(--primary-blue);
            color: #fff;
            vertical-align: middle;
            transition: 0.3s;
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
                font-size: 1.5rem;
                font-weight: 500;
              }
              & p {
                font-size: 1.25rem;
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
}
@media screen and (max-width: 1920px) {
  .home_news_background {
    width: 35%;
    left: 12%;
    top: 0%;
  }
}
@media screen and (max-width: 1600px) {
  .home_news_background {
    width: 35%;
    left: 12%;
    top: 5%;
  }
}
@media screen and (max-width: 1400px) {
  .home_news_background {
    width: 35%;
    left: 12%;
    top: 10%;
  }
}
@media screen and (max-width: 1280px) {
  .home_news_subscription {
    width: 25%;
    &_importing {
      & input {
        width: 80%;
        height: 40px;
        border-radius: 30px;
        padding: 1.25rem;
        border: 2px solid var(--primary-blue);
        background-color: var(--primary-blue);
        color: #fff;
        outline: none;
      }
    }
  }
  .home_news_all {
    width: 75%;
    &_carousel {
      width: 100%;
      margin-top: 2rem; // 可改
      &_list {
        width: 270px; // 寬度影響左右方向鍵位置，更改時要注意
        &_item {
          width: 285px; // 可改
          min-height: 385px; // 可改 注意標題長度
          .carousel_content {
            &_title {
              margin-top: 0.5rem;
              & br {
                display: block;
              }
            }
          }
        }
        .modal {
          &_content {
            width: 80%;
            height: 50vh;
          }
        }
      }
    }
  }
  .home_news_background {
    width: 42%;
    position: absolute;
    left: 5%;
    top: 10%;
    z-index: -1;
    animation: rotate-taichi 5s infinite linear;
    user-select: none;
  }
}
@media screen and (max-width: 1024px) {
  .home_news_subscription {
    width: 100%;
    border-right: 0px;
    & h2 {
      padding-top: 2rem;
    }
    &_importing {
      & input {
        width: 38%;
      }
      & span {
        right: 34%;
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
      margin-top: 3rem;
    }
    &_carousel {
      margin-top: 0rem;
      height: 500px;
      &_list {
        position: relative;
        list-style-type: none;
        display: flex;
        justify-content: center;
        width: 320px; // 寬度影響左右方向鍵位置，更改時要注意
        margin: 0 auto;
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
          &_content {
            padding: 1.25rem;
            position: relative;
            width: 90%;
            height: 60vh;
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
                height: 70px;
                background-color: var(--primary-blue);
              }
              &_text {
                width: 100%;
                display: flex;
                align-items: end;
                justify-content: space-between;
                margin-left: 1rem;
                text-align: left;
                & h3 {
                }
                & br {
                  display: block;
                }
                & p {
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
              font-size: 1.25rem;
            }
          }
        }
        .carousel_prev {
          top: 220px;
          left: 0px;
        }
        .carousel_next {
          right: 0px;
          top: 220px;
        }
      }
    }
  }
  .home_news_background {
    width: 70%;
    position: absolute;
    left: 15%;
    top: 0%;
  }
}
@media screen and (max-width: 768px) {
  .home_news_all_carousel_list .modal_content {
    height: 70vh;
  }
  .home_news_subscription_importing {
    & input {
      width: 55%;
    }
    & span {
      right: 28%;
    }
  }
  .home_news_all_carousel_list .modal_content_title_text {
    flex-direction: column;
    align-items: start;
    & p {
      margin-left: 0rem;
    }
  }
  .home_news_background {
    width: 90%;
    position: absolute;
    left: 5%;
    top: 5%;
    z-index: -1;
    animation: rotate-taichi 5s infinite linear;
  }
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
        width: 60%;
        &::placeholder {
        }
      }
      & span {
        right: 26%;
      }
    }
    &_hashtag {
      display: none;
    }
  }
  .home_news_all {
    & h2 {
      margin-top: 2.5rem;
    }
    &_carousel {
      margin-top: 0rem;
      height: 500px;
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
          &_content {
            padding: 1.25rem;
            position: relative;
            width: 90%;
            height: 75vh;
            margin: auto;
            &_close {
              position: absolute;
              top: 0.5rem;
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
                  font-size: 1.25rem;
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
