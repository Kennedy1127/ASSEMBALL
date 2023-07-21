<template>
  <main class="recruit">
    <div class="recruit_landing">
      <RecruitmentLanding />
    </div>

    <div class="wrapper">
      <div class="recruit_copywritings">
        <div class="recruit_copywritings_header">
          <div class="block"></div>
          <h2 class="recruit_copywritings_header_title">球員招募</h2>
        </div>

        <div class="recruit_copywritings_content">
          <RecruitmentCards :copywritings="computedCopywritings" />
          <RecruitmentAside />
        </div>
      </div>

      <div class="recruit_feedback">
        <div class="recruit_feedback_carousel">
          <RecruitmentSwiper />
        </div>
        <div class="recruit_feedback_pics">
          <img
            src="@/assets/images/recruitment/Baseball-pana.png"
            alt="feedback pic"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import RecruitmentLanding from "@/components/recruitments/recruitment/RecruitmentLanding.vue";
import RecruitmentCards from "@/components/recruitments/recruitment/RecruitmentCards.vue";
import RecruitmentAside from "@/components/recruitments/recruitment/RecruitmentAside.vue";
import RecruitmentSwiper from "@/components/recruitments/recruitment/RecruitmentSwiper.vue";

export default {
  components: {
    RecruitmentLanding,
    RecruitmentCards,
    RecruitmentAside,
    RecruitmentSwiper,
  },

  beforeMount() {
    // 掛載後撈文案數量
    this.$store.dispatch("getCopywritingsCount");

    // 如果文案陣列長度為0或是文案陣列長度與文案數量不等於，則撈文案資料
    if (
      this.$store.state.copywritings.length === 0 ||
      this.$store.state.copywritings.length !==
        this.$store.state.copywritingsCount
    )
      this.$store.dispatch("getCopywritings");
  },

  data() {
    return {};
  },

  computed: {
    // 渲染用資料
    computedCopywritings() {
      return this.$store.getters.dateSortedFilteredCopywritings;
    },
  },
};
</script>

<style scoped lang="scss">
.recruit {
  &_landing {
    position: relative;
    min-height: 650px;
    // z-index: -1; // -1搜尋欄會無法使用
    background-image: url("@/assets/images/recruitment/recruitment-landing.png");
    background-position: 100% 90%;
    background-repeat: no-repeat;
  }

  &_copywritings {
    max-width: 1400px; // 1600? 1400? 1200?
    margin: 4rem auto 0;

    &_header {
      width: fit-content;
      position: relative;
      .block {
        position: absolute;
        top: 50%;
        left: -3rem;
        transform: translateY(-50%);

        width: 1rem;
        height: 4rem;
        background-color: var(--primary-blue);
      }

      &_title {
        font-weight: 700;
        font-size: 2rem;
        color: var(--primary-blue);
      }
    }

    &_content {
      margin-top: 4rem;
      display: flex;
      gap: 1.5rem;
    }
  }

  &_feedback {
    max-width: 1400px;
    margin: 10rem auto;

    display: flex;
    gap: 4rem;

    &_carousel {
      width: 50%;
    }

    &_pics {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
