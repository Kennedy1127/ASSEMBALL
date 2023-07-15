<template>
<<<<<<< HEAD
  <main class="home">
    <div class="wrapper">
      <section class="home_landing">
        <div class="home_landing_video">
          <video autoplay loop muted>
            <source src="~@/assets/video/baseball_video_AdobeExpress.mp4" />
          </video>
        </div>
        <div class="home_landing_all">
          <div class="home_landing_all_title">
            <h1>{{ homeLandingTitle.title }}</h1>
            <h1>{{ homeLandingTitle.about }}</h1>
          </div>
          <div class="home_landing_all_text">
            <div class="home_landing_all_text_first">
              <strong>{{ homeLandingFirst.focus }}</strong>
              <p>{{ homeLandingFirst.textOne }}</p>
              <p>{{ homeLandingFirst.textTwo }}</p>
            </div>
            <div class="home_landing_all_text_center">
              <p>{{ homeLandingCenter.textOne }}</p>
              <p>{{ homeLandingCenter.textTwo }}</p>
              <strong>{{ homeLandingCenter.focus }}</strong>
            </div>
            <div class="home_landing_all_text_last">
              <p>{{ homeLandingLast.textOne }}</p>
              <p>{{ homeLandingLast.textTwo }}</p>
              <strong>{{ homeLandingLast.focus }}</strong>
              <p>{{ homeLandingLast.textThree }}</p>
            </div>
          </div>
        </div>
      </section>
      <aside class="home_marquee">
        <div class="home_marquee_hashtag">
          <div
            class="home_marquee_hashtag_text"
            v-for="item in homeMarqueeProduct"
            :key="item"
          >
            <router-link to="/">{{ item }}</router-link>
          </div>
          <div
            class="home_marquee_hashtag_text"
            v-for="item in homeMarqueeProduct"
            :key="item"
          >
            <router-link to="/">{{ item }}</router-link>
          </div>
        </div>
        <div class="home_marquee_hashtag">
          <div
            class="home_marquee_hashtag_text"
            v-for="item in homeMarqueeCopywriting"
            :key="item"
          >
            <router-link to="/">{{ item }}</router-link>
          </div>
          <div
            class="home_marquee_hashtag_text"
            v-for="item in homeMarqueeCopywriting"
            :key="item"
          >
            <router-link to="/">{{ item }}</router-link>
          </div>
        </div>
        <div class="home_marquee_hashtag">
          <div
            class="home_marquee_hashtag_text"
            v-for="item in homeMarqueeTeach"
            :key="item"
          >
            <router-link to="/">{{ item }}</router-link>
          </div>
          <div
            class="home_marquee_hashtag_text"
            v-for="item in homeMarqueeTeach"
            :key="item"
          >
            <router-link to="/">{{ item }}</router-link>
          </div>
        </div>
      </aside>
      <section class="home_news">
        <div class="home_news_subscription">
          <h2>最新消息</h2>
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
          <div class="home_news_all_card"></div>
        </div>
        <div class="home_news_background">
          <img
            class="product_message_area_all_pic_mark"
            src="~@/assets/images/background/news_background.png"
            alt="mark"
          />
        </div>
      </section>
    </div>
  </main>
=======
  <div>home</div>
  <div class="test">
    <router-link to="/products">go to products</router-link>
  </div>
  <div class="test-detail">
    <router-link to="/products/0">go to productsdetail</router-link>
  </div>
  <div class="signin">
    <router-link to="/authentication">go to signup </router-link>
  </div>
>>>>>>> d017ccec61cdad134ff28e4887ae9d590e07b397
</template>

<script>
export default {
  data() {
    return {
      homeLandingTitle: {
        title: "ABOUT ASSEMBALL",
        about: "- BASEBALL -",
      },
      homeLandingFirst: {
        focus: "在這裡，我們致力於召集一群同樣熱愛棒球的人。",
        textOne: "不論你是新手還是資深球員，",
        textTwo: "我們都歡迎你加入或創建屬於自己的棒球團隊。",
      },
      homeLandingCenter: {
        focus:
          "- 為了解決這個問題，ASSEMBALL提供為棒球球隊和球員提供絕佳的配對服務 -",
        textOne:
          "無論在棒球場上還是球迷的心中，一個成功的球隊都需要完美的球員組合",
        textTwo: "然而，找到適合球隊需求的球員並不容易",
      },
      homeLandingLast: {
        focus:
          "- 這裡不僅僅是一個買賣的場所，也是一個棒球愛好者之間交流和互動的社群 -",
        textOne: "我們匯集了各種棒球相關的二手商品",
        textTwo: "並且嚴格審核和篩選所有上架的二手商品，確保它們的質量和可用性",
        textThree:
          "通過二手商品拍賣服務鼓勵棒球愛好者共享和再利用裝備，減少資源的浪費和環境壓力",
      },
      homeMarqueeProduct: [
        "＃品牌裝備",
        "＃球場必備",
        "#球衣收藏",
        "#優質裝備",
        "#球具清倉",
        "#耐用品",
        "#全新球套",
        "#團隊配備",
        "#捕手手具",
        "#投手球鞋",
        "#高比重",
        "＃品牌裝備",
        "＃球場必備",
        "#球衣收藏",
        "#優質裝備",
        "#球具清倉",
        "#耐用品",
        "#全新球套",
        "#團隊配備",
        "#捕手手具",
        "#投手球鞋",
        "#高比重",
      ],
      homeMarqueeCopywriting: [
        "＃強弱組合",
        "＃人才招募",
        "#領袖球員",
        "#場上領導",
        "#守備能力",
        "#團隊精神",
        "#季節準備",
        "#球隊聲望",
        "#球員篩選",
        "#休閒球隊",
        "#實力對戰",
        "＃強弱組合",
        "＃人才招募",
        "#領袖球員",
        "#場上領導",
        "#守備能力",
        "#團隊精神",
        "#季節準備",
        "#球隊聲望",
        "#球員篩選",
        "#休閒球隊",
        "#實力對戰",
      ],
      homeMarqueeTeach: [
        "#打擊率",
        "#衝刺出壘",
        "＃滾地球",
        "#投手輪換",
        "#本壘打",
        "#三振",
        "#快速球",
        "#變化球",
        "#逆轉比賽",
        "#滑壘",
        "#指叉球",
        "#打擊率",
        "#衝刺出壘",
        "＃滾地球",
        "#投手輪換",
        "#本壘打",
        "#三振",
        "#快速球",
        "#變化球",
        "#逆轉比賽",
        "#滑壘",
        "#指叉球",
      ],
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
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  background-color: var(--primary-blue);
  .wrapper {
    width: 100%;
    max-width: 1600px;
    // 網站故事
    .home_landing {
      width: 100%;
      height: 1650px;
      color: #fff;
      padding: 2rem;
      position: relative;
      &_video {
        width: 80%;
        margin-left: auto;
        position: sticky;
        top: 2rem;
        & video {
          width: 100%;
        }
      }
      &_all {
        position: absolute;
        top: 0;
        left: 2rem;
        right: 2.5rem;

        &_title {
          margin-top: 4rem;
          & h1 {
            font-size: 96px;
            font-family: "Montserrat";
          }
        }
        &_text {
          strong {
            font-size: 2rem;
          }
          p {
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          &_first {
            margin-top: 12rem;
          }
          &_center {
            margin-top: 12rem;
          }
          &_last {
            margin-top: 12rem;
            text-align: right;
          }
        }
      }
    }
    // 跑馬燈
    .home_marquee {
      text-align: center;
      font-size: 1.5rem;
      background-color: var(--primary-blue);
      color: rgb(255, 255, 255);
      padding-top: 4rem;
      overflow: hidden;
      &_hashtag {
        display: flex;
        animation: scroll 50s linear infinite;
        &:nth-child(2) {
          animation: scroll2 50s linear infinite;
        }
        &_text {
          padding: 1rem 1rem 1rem 0;
          flex-shrink: 0;
          border-top: 1px solid #fff;
        }
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll2 {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      }
    }
    //最新消息
    .home_news {
      background-color: #fff;
      color: var(--primary-blue);
      display: flex;
      text-align: center;
      position: relative;
      z-index: 2;
      &_subscription {
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
            & :hover {
              transform: scale(1.2);
            }
          }
        }
      }
      &_all {
        width: 70%;
        & h2 {
          margin-top: 1rem;
          font-size: 96px;
          font-family: "Montserrat";
        }
      }
      &_background {
        width: 35%;
        position: absolute;
        left: 12%;
        top: 12%;
        z-index: -1;
        & img {
          width: 100%;
          animation: rotate-taichi 5s infinite linear;
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
    }
  }
}
</style>
