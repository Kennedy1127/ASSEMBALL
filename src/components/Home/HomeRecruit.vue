<template>
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
        <router-link :to="{ name: 'Recruitments' }">球隊招募</router-link>
      </h2>
      <p>發掘你的潛力，成為球隊的關鍵一員！</p>
    </div>
  </div>
  <div class="home_recruit_carousel">
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :autoplay="2000"
      :wrap-around="true"
    >
      <Slide v-for="data in defaultCarouselData" :key="data">
        <div class="carousel__item">
          <div class="carousel__item_pic">
            <img :src="data.imgUrl" alt="Image" />
          </div>
          <h3 class="carousel__item_name">
            {{ data.team_name }}
          </h3>
          <div class="carousel__item_about">
            <p>
              年齡要求：<span>{{ data.age }}</span>
            </p>
            <p>
              球技水平：<span>{{ data.level }}</span>
            </p>
            <p>
              技術能力：<span>{{ data.major }}</span>
            </p>
            <p>
              資歷或經驗：<span>{{ data.experience }}</span>
            </p>
          </div>
          <router-link :to="{ name: 'Recruitments' }">
            <button>
              <Icon type="ios-arrow-dropright-circle" />{{ data.button }}
            </button>
          </router-link>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
    defaultCarouselData: [
      {
        imgUrl: require("@/assets/images/index/team_logo_01.png"),
        team_name: "底特律紡織者",
        age: "18-35歲",
        level: "初心者",
        major: "打擊",
        experience: "無",
        button: "更多",
      },
      {
        imgUrl: require("@/assets/images/index/team_logo_02.png"),
        team_name: "密爾瓦基釀酒人",
        age: "20-35歲",
        level: "新手",
        major: "內野手",
        experience: "學校比賽",
        button: "更多",
      },
      {
        imgUrl: require("@/assets/images/index/team_logo_03.png"),
        team_name: "費城自由人",
        age: "20-30歲",
        level: "資深",
        major: "外野手",
        experience: "大學棒球",
        button: "更多",
      },
      {
        imgUrl: require("@/assets/images/index/team_logo_04.png"),
        team_name: "信義天使",
        age: "20-25歲",
        level: "新手",
        major: "游擊手",
        experience: "學校比賽",
        button: "更多",
      },
      {
        imgUrl: require("@/assets/images/index/team_logo_05.png"),
        team_name: "波士頓爆豪客",
        age: "20-30歲",
        level: "資深",
        major: "捕手",
        experience: "小聯盟",
        button: "更多",
      },
      {
        imgUrl: require("@/assets/images/index/team_logo_06.png"),
        team_name: "辛辛那提奪旗者",
        age: "15-25歲",
        level: "初心者",
        major: "打擊",
        experience: "青少年聯盟",
        button: "更多",
      },
      {
        imgUrl: require("@/assets/images/index/team_logo_07.png"),
        team_name: "克里夫蘭閃電",
        age: "20-40歲",
        level: "新手",
        major: "捕手",
        experience: "大學棒球",
        button: "更多",
      },
    ],
  }),
});
</script>

<style lang="scss">
.home_recruit_title {
  width: 25%;
  display: flex;
  border-right: 3px solid var(--primary-blue);
  &_pic {
    width: 10%;
    margin-top: auto;
    position: absolute;
    bottom: 2.25rem;
    left: 3rem;
    & img {
      width: 100%;
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
.home_recruit_carousel {
  width: 75%;
  .carousel__item {
    width: 100%;
    border-right: 3px solid var(--primary-blue);
    color: var(--primary-blue);
    &_pic {
      width: 40%;
      margin: auto;
      border-radius: 50%;
      border: 3px solid var(--primary-blue);
      overflow: hidden;
      padding: 1.25rem;
      & img {
        width: 100%;
        border-radius: 50%;
      }
    }
    &_name {
      margin-top: 0.5rem;
      font-size: 1.25rem;
    }
    &_about {
      width: 57%;
      margin: auto;
      margin-top: 0.75rem;
      text-align: left;
      font-size: 1rem;
      & p {
        font-weight: 600;
      }
      & span {
        font-weight: 200;
      }
    }
    & button {
      margin-top: 1.75rem;
      width: 6rem;
      height: 2rem;
      border-radius: 30px;
      border: 1px solid var(--primary-blue);
      background-color: var(--primary-blue);
      color: #fff;
      & i {
        font-size: 1rem;
        margin-right: 0.25rem;
      }
    }
    & button:hover {
      border: 1px solid var(--primary-blue);
      background-color: #fff;
      color: var(--primary-blue);
      vertical-align: middle;
    }
  }
  .carousel__prev,
  .carousel__next {
    background-color: var(--primary-blue);
    color: #fff;
    border-radius: 50%;
  }
}
</style>
