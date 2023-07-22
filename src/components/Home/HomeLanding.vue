<template>
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
    & h1 {
      font-size: 96px;
      font-family: "Montserrat";
      text-shadow: var(--shadow-heavy);
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
      margin-top: 8rem;
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
</style>
