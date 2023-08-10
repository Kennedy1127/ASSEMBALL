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
          <RecruitmentMobileButtons
            v-if="store.state.isMobile"
            @openModal="toggleAside"
          />
          <RecruitmentCards v-if="!isNoResults" />
          <RecruitmentNoResults v-else />
          <RecruitmentAside v-if="isAsideActived" @closeModal="toggleAside" />
        </div>
      </div>

      <div class="recruit_feedback">
        <div class="recruit_feedback_carousel">
          <RecruitmentSwiper />
        </div>
        <div class="recruit_feedback_pics" v-if="!store.state.isMobile">
          <img
            src="@/assets/images/recruitment/Baseball-pana.png"
            alt="feedback pic"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import RecruitmentLanding from "@/components/recruitments/recruitment/RecruitmentLanding.vue";
import RecruitmentCards from "@/components/recruitments/recruitment/RecruitmentCards.vue";
import RecruitmentNoResults from "@/components/recruitments/recruitment/RecruitmentNoResults.vue";
import RecruitmentAside from "@/components/recruitments/recruitment/RecruitmentAside.vue";
import RecruitmentMobileButtons from "@/components/recruitments/recruitment/RecruitmentMobileButtons.vue";
import RecruitmentSwiper from "@/components/recruitments/recruitment/RecruitmentSwiper.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  store.state.isPending = true;
  await store.dispatch("getCopywritings");
  store.state.isPending = false;
});

const isNoResults = computed(
  () => store.getters.filteredCopywritings.length === 0
);

// 確認桌機或手機，桌機aside預設為true，手機aside預設為false
const isAsideActived = ref(store.state.isMobile ? false : true);

const toggleAside = () => {
  isAsideActived.value = !isAsideActived.value;
};
</script>

<style scoped lang="scss">
.recruit {
  margin-top: 6rem;
  @media all and (max-width: 420px) {
    margin-top: 4rem;
  }

  &_landing {
    position: relative;
    min-height: 650px;
    // z-index: -1; // -1搜尋欄會無法使用
    background-image: url("@/assets/images/recruitment/recruitment-landing.png");
    background-position: 100% 90%;
    background-repeat: no-repeat;

    @media all and (max-width: 420px) {
      min-height: 300px;
      background-image: url("@/assets/images/recruitment/recruitment-landing-sm.png");
      background-position: center;
    }
  }

  .wrapper {
    @media all and (max-width: 420px) {
      padding: 0 2rem;
    }
  }

  &_copywritings {
    max-width: 1400px; // 1600? 1400? 1200?
    margin: 4rem auto 0;

    @media all and (max-width: 1280px) {
      max-width: 1200px;
    }

    @media all and (max-width: 420px) {
      margin-top: 2rem;
    }

    &_header {
      width: fit-content;
      padding-left: 0.5rem;
      position: relative;
      z-index: -1;

      @media all and (max-width: 420px) {
        padding: 0 0.5rem;

        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .block {
        position: absolute;
        top: 50%;
        left: -3rem;
        transform: translateY(-50%);

        width: 1rem;
        height: 4rem;
        background-color: var(--primary-blue);

        @media all and (max-width: 1280px) {
          left: 0.5rem;
        }

        @media all and (max-width: 420px) {
          position: initial;
          transform: translateY(0);
        }
      }

      &_title {
        font-weight: 700;
        font-size: 2rem;
        color: var(--primary-blue);

        @media all and (max-width: 1280px) {
          margin-left: 3rem;
        }
      }
    }

    &_content {
      margin-top: 4rem;
      display: flex;
      gap: 1.5rem;

      @media all and (max-width: 420px) {
        margin-top: 0;
        flex-direction: column;
        gap: 0;
      }
    }
  }

  &_feedback {
    max-width: 1400px;
    margin: 10rem auto;

    display: flex;
    gap: 4rem;

    @media all and (max-width: 420px) {
      margin: 5rem auto;
    }

    &_carousel {
      width: 50%;

      @media all and (max-width: 420px) {
        width: 100%;
      }
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
