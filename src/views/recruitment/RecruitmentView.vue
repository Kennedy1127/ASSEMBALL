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
        <div class="recruit_feedback_pics"></div>
      </div>
    </div>
  </main>
</template>

<script>
import RecruitmentLanding from "@/components/recruitment/RecruitmentLanding.vue";
import RecruitmentCards from "@/components/recruitment/RecruitmentCards.vue";
import RecruitmentAside from "@/components/recruitment/RecruitmentAside.vue";
import RecruitmentSwiper from "@/components/recruitment/RecruitmentSwiper.vue";

export default {
  components: {
    RecruitmentLanding,
    RecruitmentCards,
    RecruitmentAside,
    RecruitmentSwiper,
  },

  beforeMount() {
    if (this.$store.state.copywritings.length !== 0) return;
    this.$store.dispatch("getCopywritings");
  },

  data() {
    return {};
  },

  computed: {
    // 撈資料後更新
    computedCopywritings() {
      return this.$store.getters.copywritingsFilteredBy;
    },
  },
};
</script>

<style scoped lang="scss">
.recruit {
  &_landing {
    position: relative;
    min-height: 650px;

    background-image: url("@/assets/images/recruitment/recruitment-landing.png");
    background-position: 100% 90%;
    background-repeat: no-repeat;
  }

  &_copywritings {
    max-width: 1400px; // 1600? 1400? 1200?
    margin: 4rem auto 0;

    &_header {
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
      width: 50%;
      min-height: 600px;
      background-color: #faa;
    }
  }
}
</style>
