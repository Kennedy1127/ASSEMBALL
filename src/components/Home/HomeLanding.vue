<template>
  <div class="home_landing_video">
    <video class="home_landing_video_desktop" autoplay loop muted>
      <source src="~@/assets/video/baseball_video_AdobeExpress.mp4" />
    </video>
    <video class="home_landing_video_mobile" autoplay loop muted>
      <source src="~@/assets/video/mobile_baseball_video_AdobeExpress.mp4" />
    </video>
  </div>
  <div class="home_landing_all">
    <div class="home_landing_all_title">
      <div class="home_landing_all_title_wrapper">
        <h1 class="home_landing_all_title_wrapper_text">
          {{ homeLandingTitle.titleAbout }}<br />
          {{ homeLandingTitle.titleAssemball }}
        </h1>
        <h1 class="home_landing_all_title_wrapper_text">
          {{ homeLandingTitle.about }}
        </h1>
      </div>
    </div>
    <div class="home_landing_all_text">
      <div class="home_landing_all_text_first fade-up">
        <strong
          >{{ homeLandingFirst.focusOne }}<br />
          {{ homeLandingFirst.focusTwo }}
        </strong>
        <p>
          {{ homeLandingFirst.textOne }}<br />{{ homeLandingFirst.textTwo }}
        </p>
      </div>
      <div class="home_landing_all_text_center fade-up">
        <p>
          {{ homeLandingCenter.textOne }}<br />{{
            homeLandingCenter.textOneBreakpoint
          }}
        </p>
        <p>
          {{ homeLandingCenter.textTwo
          }}{{ homeLandingCenter.textTwoBreakpoint }}
        </p>
        <strong
          >{{ homeLandingCenter.focusOne }}<br />{{ homeLandingCenter.focusTwo
          }}{{ homeLandingCenter.focusThree }}</strong
        >
      </div>
      <div class="home_landing_all_text_last fade-up">
        <p>
          {{ homeLandingLast.textOne }}
        </p>
        <p>
          {{ homeLandingLast.textTwo }}<br />{{
            homeLandingLast.textTwoBreakpoint
          }}
        </p>
        <strong
          >{{ homeLandingLast.focusOne }}<br />{{
            homeLandingLast.focusTwo
          }}</strong
        >
        <p>
          {{ homeLandingLast.textThree }}<br />{{
            homeLandingLast.textThreeBreakpoint
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeLandingTitle: {
        titleAbout: "ABOUT",
        titleAssemball: "ASSEMBALL",
        about: "- BASEBALL -",
      },
      homeLandingFirst: {
        focusOne: "在這裡，",
        focusTwo: "我們致力於召集一群同樣熱愛棒球的人。",
        textOne: "不論你是新手還是資深球員，",
        textTwo: "我們都歡迎你加入或創建屬於自己的棒球團隊。",
      },
      homeLandingCenter: {
        focusOne: "- 為了解決這個問題，",
        focusTwo: "ASSEMBALL為棒球球隊和球員提供",
        focusThree: "絕佳的配對服務 -",
        textOne: "無論在棒球場上還是球迷的心中，",
        textOneBreakpoint: "一個成功的球隊都需要完美的球員組合。",
        textTwo: "然而，",
        textTwoBreakpoint: "找到適合球隊需求的球員並不容易。",
      },
      homeLandingLast: {
        focusOne: "- 這裡不僅僅是一個買賣的場所，",
        focusTwo: "也是一個棒球愛好者之間交流和互動的社群 -",
        textOne: "我們匯集了各種棒球相關的二手商品，",
        textTwo: "並且嚴格審核和篩選所有上架的商品",
        textTwoBreakpoint: "確保它們的質量和可用性。",
        textThree: "通過二手商品拍賣服務，",
        textThreeBreakpoint:
          "鼓勵棒球愛好者共享和再利用裝備減少資源的浪費與環境壓力。",
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
  border-radius: var(--round);
  overflow: hidden;
  box-shadow: var(--shadow-wide);
  &_desktop {
    width: 100%;
    transform: scale(1.02);
  }
  &_mobile {
    display: none;
  }
}
.home_landing_all {
  position: absolute;
  top: 0;
  left: 2.75rem;
  right: 2.75rem;
  &_title {
    margin-top: 12rem;
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
        animation: animatedGradient 10s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        & br {
          display: none;
        }
      }
    }
    /* Animation for the gradient */
    @keyframes animatedGradient {
      0% {
        background-position: 0% 100%;
      }
      100% {
        background-position: -100% 0%;
      }
    }
  }
  &_text {
    & strong {
      font-size: 2rem;
    }
    & p {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    &_first {
      opacity: 0;
      margin-top: 8rem;
      & br {
        display: none;
      }
    }
    &_center {
      opacity: 0;
      margin-top: 12rem;
      & br {
        display: none;
      }
    }
    &_last {
      opacity: 0;
      margin-top: 12rem;
      text-align: right;
      & br {
        display: none;
      }
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
    animation: fadeUpAnimation 2s ease forwards;
  }
}
@media screen and (max-width: 1280px) {
  .home_landing_video {
    width: 90%;
    position: sticky;
    top: 10rem;
  }
  .home_landing_all_text_first {
    & br {
      display: block;
    }
  }
  .home_landing_all_text_center {
    & br {
      display: block;
    }
  }
  .home_landing_all_text_last {
    & strong {
      & br {
        display: block;
      }
    }
    p:last-of-type {
      & br {
        display: block;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .home_landing_all {
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
  }
  .home_landing_all_title {
    margin-top: 18rem;
  }
  .home_landing_all_title_wrapper_text:nth-child(2) {
    display: none;
  }
  .home_landing_all_text_center {
    margin-top: 10rem;
  }
  .home_landing_all_text_last {
    margin-top: 10rem;
  }
}
@media screen and (max-width: 768px) {
  .home_landing_video {
    width: 80%;
    overflow: hidden;
    position: sticky;
    top: 8rem;
    &_desktop {
      display: none;
    }
    &_mobile {
      display: block;
      width: 100%;
      transform: scale(1.02);
    }
  }
  .home_landing_all_title_wrapper_text {
    font-size: 4rem;
    & br {
      display: block;
    }
  }
  .home_landing_all_text_last {
    & br {
      display: block;
    }
  }
  .home_landing_all_text {
    & p {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
}
@media screen and (max-width: 550px) {
  .home_landing_all_text {
    & p {
      font-size: 1.25rem;
    }
    & strong {
      font-size: 1.75rem;
    }
  }
}
@media screen and (max-width: 420px) {
  .home_landing_video {
    width: 90%;
    height: auto;
    position: sticky;
    top: 8rem;
  }
  .home_landing_all {
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
    &_title {
      margin-top: 45vh;
      &_wrapper {
        &_text {
          font-size: 3rem;
        }
      }
    }
    &_text {
      & strong {
        font-size: 1.3rem;
      }
      & p {
        font-size: 1.15rem;
        line-height: 1.75rem;
      }
      &_first {
        margin-top: 2.5rem;
        & br {
          display: block;
        }
      }
      &_center {
        margin-top: 9rem;
        & br {
          display: block;
        }
      }
      &_last {
        margin-top: 9rem;
        text-align: left;
        & br {
          display: block;
        }
      }
    }
  }
}
</style>
