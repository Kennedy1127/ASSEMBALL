<template>
  <div class="home_landing_video">
    <video autoplay loop muted>
      <source src="~@/assets/video/baseball_video_AdobeExpress.mp4" />
    </video>
  </div>
  <div class="home_landing_all">
    <div class="home_landing_all_title">
      <div class="home_landing_all_title_wrapper">
        <h1 class="home_landing_all_title_wrapper_text">
          {{ homeLandingTitle.title }}
        </h1>
        <h1 class="home_landing_all_title_wrapper_text">
          {{ homeLandingTitle.about }}
        </h1>
      </div>
    </div>
    <div class="home_landing_all_text fade-up">
      <div class="home_landing_all_text_first">
        <strong>{{ homeLandingFirst.focus }}</strong>
        <p>{{ homeLandingFirst.textOne }}</p>
        <p>{{ homeLandingFirst.textTwo }}</p>
      </div>
      <div class="home_landing_all_text_center fade-up">
        <p>{{ homeLandingCenter.textOne }}</p>
        <p>{{ homeLandingCenter.textTwo }}</p>
        <strong>{{ homeLandingCenter.focus }}</strong>
      </div>
      <div class="home_landing_all_text_last fade-up">
        <p>{{ homeLandingLast.textOne }}</p>
        <p>{{ homeLandingLast.textTwo }}</p>
        <strong>{{ homeLandingLast.focus }}</strong>
        <p>{{ homeLandingLast.textThree }}</p>
      </div>
    </div>
  </div>
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
    };
  },
  mounted() {
    this.fadeUpText(); // 调用一次确保初始状态正确
    window.addEventListener("scroll", this.fadeUpText);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.fadeUpText);
  },
  methods: {
    fadeUpText() {
      const elements = document.querySelectorAll(
        ".home_landing_all_text_first, .home_landing_all_text_center, .home_landing_all_text_last"
      );

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.9) {
          element.classList.add("fade-up");
        } else {
          element.classList.remove("fade-up");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home_landing_video {
  width: 80%;
  margin-left: auto;
  position: sticky;
  top: 8rem;
  & video {
    width: 100%;
  }
}
.home_landing_all {
  position: absolute;
  top: 0;
  left: 2rem;
  right: 2.5rem;

  &_title {
    margin-top: 8rem;
    &_wrapper {
      overflow: hidden;
      position: relative;
      &_text {
        font-size: 96px;
        font-family: "Montserrat";
        text-shadow: var(--shadow-heavy);
        background: linear-gradient(
          90deg,
          #fff,
          var(--secondary-blue-1),
          #fff,
          var(--secondary-blue-2),
          #fff,
          var(--secondary-blue-1),
          #fff
        );
        background-size: 200%;
        background-clip: text;
        color: transparent;
        animation: animatedGradient 10s alternate infinite;
      }
    }
    /* Animation for the gradient */
    @keyframes animatedGradient {
      0% {
        background-position: 0% 100%;
      }
      100% {
        background-position: 100% 0%;
      }
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
      opacity: 0;
      margin-top: 8rem;
    }
    &_center {
      opacity: 0;
      margin-top: 12rem;
    }
    &_last {
      opacity: 0;
      margin-top: 12rem;
      text-align: right;
    }
  }
  .fade-up {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes fadeUpAnimation {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .home_landing_all_text_first.fade-up,
  .home_landing_all_text_center.fade-up,
  .home_landing_all_text_last.fade-up {
    animation: fadeUpAnimation 2.5s ease forwards;
  }
}
</style>
