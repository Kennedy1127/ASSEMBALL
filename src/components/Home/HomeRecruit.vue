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
        <router-link :to="{ name: 'Recruitments' }"
          >球員招募<Icon type="ios-arrow-dropright-circle"
        /></router-link>
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
            {{ data.teamName }}
          </h3>
          <div class="carousel__item_about">
            <p>
              球隊地區：<span>{{ data.area }}</span>
            </p>
            <p>
              招募職缺：<span>{{ convertRole(data.role) }}</span>
            </p>
            <p>
              資歷或經驗：<span>{{ convertExp(data.exp) }}</span>
            </p>
            <p>
              刊登日期：<span>{{ convertDate(data.date) }}</span>
            </p>
          </div>
          <button
            @click="this.$router.push(`/recruitments/copywriting/${data.id}`)"
          >
            <Icon type="ios-arrow-dropright-circle" />更多
          </button>
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

import getData from "@/composables/data/getData";
import useStorage from "@/composables/data/useStorage";

import roles from "@/composables/tables/roles";
import exps from "@/composables/tables/exps";

const { getDocuments, getDocument } = getData();
const { getPicsLink } = useStorage();

export default defineComponent({
  async mounted() {
    const teamData = await getDocuments("COPYWRITINGS", [
      ["status", "==", true],
      // ["top", "==", true],
    ]);
    for (let i = 0; i < teamData.length; i++) {
      const team = await getDocument("TEAMS", teamData[i].team_id);
      teamData[i].teamName = team.teamName;

      const res = await getPicsLink(
        1,
        `images/TEAMS/${teamData[i].team_id}`,
        "team-pic"
      );
      teamData[i].imgUrl = res[0];
      // teamData[i].imgSrc = res[0];
      // teamData[i].top = i + 1;
      // teamData[i].formattedDate = this.convertDate(teamData[i].date);
    }

    this.defaultCarouselData = [...teamData];
  },

  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      // 420px and up
      420: {
        itemsToShow: 1.5,
        snapAlign: "start",
      },
      // 700px and up
      768: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 2.5,
        snapAlign: "start",
      },
      // 1200 and up
      1200: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
    defaultCarouselData: [],
  }),
  methods: {
    goToRecruitments(tag) {
      this.$router.push({ name: "recruitments", query: { tag } });
    },

    convertRole(role) {
      if (role || role === 0) return roles[role + 1].label;
    },

    convertExp(exp) {
      if (exp || exp === 0) return exps[exp];
    },

    convertDate(copywritingDate) {
      if (!copywritingDate) return;
      // 日期
      const date = new Date(copywritingDate.toDate());
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}.${String(date.getDate()).padStart(2, "0")}`;
    },
  },
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
      & a {
        color: var(--primary-blue);
        & i {
          vertical-align: baseline;
          margin-top: 0.5rem;
        }
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
      transition: 0.3s;
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
      transition: 0.3s;
    }
  }
  .carousel__prev,
  .carousel__next {
    background-color: var(--primary-blue);
    color: #fff;
    border-radius: 50%;
  }
}
@media screen and (max-width: 1280px) {
  .home_recruit_title {
    &_pic {
      width: 13%;
      margin-top: auto;
      position: absolute;
      bottom: 2.25rem;
      left: 1rem;
    }
  }
}
@media screen and (max-width: 1024px) {
  .home_recruit_title {
    &_pic {
      width: 15%;
    }
  }
}
@media screen and (max-width: 768px) {
  .home_recruit_title {
    width: 100%;
    display: flex;
    border-right: 0px;
    padding-bottom: 1.5rem;
    border-bottom: 3px solid var(--primary-blue);
    &_pic {
      display: none;
    }
    &_text {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-left: 0rem;
      & h2 {
        writing-mode: horizontal-tb;
        font-size: 2.5rem;
        & a {
          color: var(--primary-blue);
          & i {
            vertical-align: baseline;
            margin-left: 1rem;
          }
        }
      }
      & p {
        writing-mode: horizontal-tb;
        font-size: 1rem;
        font-weight: 500;
        margin-left: 0rem;
      }
    }
  }
  .home_recruit_carousel {
    width: 100%;
    .carousel__item {
      width: 100%;
      border-right: 0px;
      color: var(--primary-blue);
      margin-top: 2rem;
      border-right: 3px solid var(--primary-blue);
      &_pic {
        width: 35%;
        margin: auto;
        border-radius: 50%;
        border: 3px solid var(--primary-blue);
        overflow: hidden;
        padding: 1.25rem;
      }
      &_name {
        margin-top: 0.5rem;
        font-size: 1.5rem;
      }
      &_about {
        width: 70%;
        margin: auto;
        margin-top: 0.75rem;
        font-size: 1.25rem;
        & span {
          font-weight: 400;
        }
      }
      & button {
        margin-top: 1.75rem;
        width: 7rem;
        height: 2.75rem;
        border-radius: 30px;
        border: 1px solid var(--primary-blue);
        background-color: var(--primary-blue);
        color: #fff;
        font-size: 1.25rem;
        & i {
          font-size: 1.5rem;
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
  }
}
@media screen and (max-width: 420px) {
  .home_recruit_title {
    width: 100%;
    display: flex;
    border-right: 0px;
    border-bottom: 3px solid var(--primary-blue);
    padding-bottom: 1rem;
    padding-left: 0rem;
    &_pic {
      display: none;
    }
    &_text {
      width: 80%;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: auto;
      & h2 {
        writing-mode: horizontal-tb;
        font-size: 2.5rem;
        & a {
          color: var(--primary-blue);
          & i {
            vertical-align: baseline;
            margin-left: 1rem;
          }
        }
      }
      & p {
        writing-mode: horizontal-tb;
        font-size: 1rem;
        font-weight: 500;
        margin-left: 0rem;
        margin-bottom: 1rem;
      }
    }
  }
  .home_recruit_carousel {
    width: 100%;
    .carousel__item {
      width: 100%;
      border-right: 0px;
      color: var(--primary-blue);
      margin-top: 2rem;
    }
  }
}
</style>
