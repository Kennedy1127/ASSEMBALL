<template>
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
      <section class="home_recruit">
        <div class="home_recruit_title">
          <div class="home_recruit_title_pic">
            <img
              class="home_recruit_title_pic_recruit"
              src="~@/assets/images/index/home_recruit.png"
              alt="recruit"
            />
          </div>
          <div class="home_recruit_title_text">
            <h2>
              <router-link to="/">球隊招募</router-link>
            </h2>
            <p>發掘你的潛力，成為球隊的關鍵一員！</p>
          </div>
        </div>
        <div class="home_recruit_carousel"></div>
      </section>
      <section class="home_message">
        <div class="home_message_title">
          <h2>
            <router-link to="/">交流留言板</router-link>
          </h2>
          <p>
            連結熱愛棒球的全球大家庭，一同分享熱情、討論戰術，共同創造無限棒球樂趣！
          </p>
        </div>
        <div class="home_message_all">
          <div class="home_message_all_pic">
            <div
              class="home_message_all_pic_round home_message_all_pic_round--1"
            ></div>
            <div
              class="home_message_all_pic_round home_message_all_pic_round--2"
            ></div>
            <div
              class="home_message_all_pic_round home_message_all_pic_round--3"
            ></div>
            <div class="home_message_all_pic_img">
              <img
                class="home_message_all_pic_img_phone"
                src="~@/assets/images/index/home_message_phone.png"
                alt="phone"
              />
              <img
                class="home_message_all_pic_img_messading"
                src="~@/assets/images/index/home_message_messaging.png"
                alt="messaging"
              />
              <img
                class="home_message_all_pic_img_people"
                src="~@/assets/images/index/home_message_people.png"
                alt="people"
              />
            </div>
          </div>
          <div class="home_message_all_text" v-for="item in messageText">
            <div class="home_message_all_text_header">
              <h3>
                {{ item.title }}
              </h3>
              <span class="home_message_all_text_header_date">
                {{ item.date }}
              </span>
              <span class="home_message_all_text_header_tag">
                {{ item.tag }}
              </span>
            </div>
            <div class="home_message_all_text_section">
              <span class="home_message_all_text_section_text">
                {{ item.text }}
              </span>
              <button class="home_message_all_text_section_btn">
                <Icon type="ios-arrow-dropright-circle" />{{ item.btn }}
              </button>
            </div>
          </div>
          <div class="home_message_all_btn">
            <button><Icon type="ios-baseball-outline" />VIEW MORE</button>
          </div>
        </div>
      </section>
      <section class="home_auction">
        <div class="home_auction_title">
          <h2>
            <router-link to="/">棒球用品二手拍賣</router-link>
          </h2>
          <p>
            走進綠色棒球世界：延續價值的環保二手拍賣專區，讓棒球用品循環再利用
          </p>
        </div>
        <div class="home_auction_all"></div>
      </section>
    </div>
  </main>
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
      messageText: [
        {
          title: "紐約野馬隊投手表現",
          date: "2023/04/28",
          tag: "HOT",
          text: "有沒有人對本週的比賽結果感到意外？我覺得野馬隊的表現真是出人意料，他們的投手表現......",
          btn: "更多",
        },
        {
          title: "如何提升棒球技術？",
          date: "2023/06/18",
          text: "對於棒球訓練和技術提升有沒有什麼好的建議？我最近在練習打擊，想聽聽大家的經驗分享......",
          btn: "更多",
        },
        {
          title: "球隊部署技巧分享",
          date: "2023/07/21",
          tag: "NEW",
          text: "對於這個球隊的戰術部署有什麼看法嗎？我覺得教練在換投手的時機上有待改進，有時候明......",
          btn: "更多",
        },
        {
          title: "這個賽季最熱門的球隊？",
          date: "2023/07/28",
          tag: "HOT",
          text: "哪支球隊在這個賽季的戰績最令你驚艷？我覺得小熊隊從開季以來一直保持穩定的表現，實......",
          btn: "更多",
        },
        {
          title: "棒球書籍和紀錄片推薦",
          date: "2023/05/14",
          text: "大家有沒有推薦的棒球書籍或紀錄片？想要深入了解棒球歷史和名人堂球員的故事！",
          btn: "更多",
        },
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
          a {
            color: #fff;
          }
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
    }
    // 球隊招募
    .home_recruit {
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
      padding: 4rem 2rem 4rem 2rem;
      display: flex;
      position: relative;
      &_title {
        width: 25%;
        display: flex;
        border-right: 3px solid var(--primary-blue);
        &_pic {
          width: 10%;
          margin-top: auto;
          position: absolute;
          bottom: 2.25rem;
          left: 3rem;
          animation: recruit 2s linear infinite;
          & img {
            width: 100%;
          }
          @keyframes recruit {
            10% {
              transform: rotate(15deg);
            }
            20% {
              transform: rotate(-10deg);
            }
            30% {
              transform: rotate(5deg);
            }
            40% {
              transform: rotate(-5deg);
            }
            50% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        }
        &_text {
          display: flex;
          margin: auto;
          & h2 {
            writing-mode: vertical-lr;
            font-size: 2.5rem;
            a {
              color: var(--primary-blue);
            }
          }
          & p {
            writing-mode: vertical-lr;
            font-size: 1.25rem;
            color: var(--primary-blue);
            margin-left: 1rem;
          }
        }
      }
      &_carousel {
        width: 75%;
        padding: 1rem;
      }
    }
    // 交流留言板
    .home_message {
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
      &_title {
        padding: 2rem 4rem 2rem 4rem;
        border-bottom: 3px solid var(--primary-blue);
        & h2 {
          & a {
            font-size: 2.5rem;
            color: var(--primary-blue);
          }
        }
        & p {
          font-size: 1.25rem;
          color: var(--primary-blue);
        }
      }
      &_all {
        display: flex;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        &_pic {
          &_round {
            position: absolute;
            border-radius: 50%;
            animation: round;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }
          &_round--1 {
            width: 300px;
            height: 300px;
            background-color: var(--secondary-blue-3);
            left: -2rem;
            top: 2rem;
            animation-duration: 3.5s;
          }
          &_round--2 {
            width: 150px;
            height: 150px;
            bottom: 4rem;
            left: 30%;
            background-color: var(--secondary-blue-1);
            animation-duration: 2.5s;
          }
          &_round--3 {
            width: 350px;
            height: 350px;
            right: 2rem;
            top: 2rem;
            background-color: var(--secondary-blue-4);
            animation-duration: 3s;
          }
          @keyframes round {
            0% {
              transform: translate(0, 0px);
            }
            100% {
              transform: translate(-18px, 0);
            }
          }
          &_img {
            & img {
              width: 40%;
              position: absolute;
              top: 2rem;
              left: 2rem;
            }
            &_phone {
              animation: meaasge;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
              animation-direction: alternate;
              animation-duration: 4s;
            }
            &_messading {
              animation: meaasge;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
              animation-direction: alternate;
              animation-duration: 3s;
            }
            &_people {
              animation: meaasge;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
              animation-direction: alternate;
              animation-duration: 3.5s;
            }
          }
          @keyframes meaasge {
            0% {
              transform: translate(0, 0px);
            }
            100% {
              transform: translate(0, -20px);
            }
          }
        }
        &_text {
          margin-left: auto;
          margin-right: 2rem;
          z-index: 1;
          width: 56%;
          color: var(--primary-blue);
          border-bottom: 2px solid var(--secondary-blue-1);
          &_header {
            display: flex;
            align-items: end;
            margin-top: 1rem;
            & h3 {
              font-size: 1.5rem;
            }
            &_date {
              font-size: 1.25rem;
              margin-left: 1rem;
            }
            &_tag {
              width: 3.5rem;
              font-size: 1rem;
              margin-left: 1rem;
              background-color: var(--caution-red);
              color: #fff;
              border-radius: var(--round);
              text-align: center;
              font-family: "Montserrat";
            }
          }
          &_section {
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
            &_text {
              width: 85%;
              font-size: 1rem;
              margin-top: 0.5rem;
              color: var(--secondary-gray-1);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &_btn {
              width: 6rem;
              border-radius: 30px;
              border: 1px solid var(--primary-blue);
              background-color: #fff;
              color: var(--primary-blue);
              & i {
                font-size: 1rem;
                margin-right: 0.25rem;
              }
            }
            &_btn:hover {
              border: 1px solid var(--primary-blue);
              background-color: var(--primary-blue);
              color: #fff;
              vertical-align: middle;
            }
          }
        }
        &_btn {
          margin: 3rem 2rem 1rem 2rem;
          text-align: right;
          & button {
            width: 13rem;
            font-size: 1.25rem;
            font-family: "Montserrat";
            border-radius: 30px;
            padding: 0.5rem;
            background-color: var(--primary-blue);
            color: #fff;
            border: 1px solid var(--primary-blue);
            & i {
              font-size: 1.75rem;
              font-weight: 500;
              margin-right: 0.5rem;
              vertical-align: sub;
            }
          }
          & button:hover {
            border: 1px solid var(--primary-blue);
            background-color: #fff;
            color: var(--primary-blue);
          }
        }
      }
    }
    // 二手拍賣區
    .home_auction {
      background-color: #fff;
      border-top: 3px solid var(--primary-blue);
      &_title {
        padding: 2rem 4rem 2rem 4rem;
        border-bottom: 3px solid var(--primary-blue);
        & h2 {
          & a {
            font-size: 2.5rem;
            color: var(--primary-blue);
          }
        }
        & p {
          font-size: 1.25rem;
          color: var(--primary-blue);
        }
      }
      &_all {
      }
    }
  }
}
.rookie {
  text-align: center;
  font-size: 60px;
  color: rgb(228, 27, 188);
  text-decoration: underline;
}
</style>
