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
<<<<<<< HEAD
          <RecruitmentCards :copywritings="computedCopywritings" />
          <RecruitmentAside />
=======
          <div class="recruit_copywritings_cards">
            <div
              v-for="index in 6"
              :key="index"
              class="recruit_copywritings_card"
            >
              <h2 class="recruit_copywritings_card_header">召募捕手</h2>

              <div class="recruit_copywritings_card_content">
                <div class="recruit_copywritings_card_title">I want you !</div>
                <div class="recruit_copywritings_card_exp">
                  <div class="recruit_copywritings_card_exp_block"></div>
                  初心者
                </div>
                <div class="recruit_copywritings_card_area">
                  <div class="recruit_copywritings_card_area_block"></div>
                  桃園市
                </div>
              </div>

              <div class="recruit_copywritings_card_border"></div>

              <div class="recruit_copywritings_card_footer">
                <div class="recruit_copywritings_card_team">
                  <div class="recruit_copywritings_card_team_icon">
                    <img
                      src="~@/assets/images/recruitment/team-icons/team-icon-1.png"
                      alt=""
                    />
                  </div>
                  <div class="recruit_copywritings_card_team_name">猛虎隊</div>
                </div>

                <div class="recruit_copywritings_card_intro">
                  <div class="recruit_copywritings_card_intro_title">
                    球隊簡介：
                  </div>
                  <p class="recruit_copywritings_card_intro_text">
                    歡迎想要打球，但又無所適從的你加入我們的團隊，我們是猛虎隊，猛虎隊的猛，猛虎隊的虎。
                  </p>
                </div>
              </div>

              <div class="recruit_copywritings_card_date">
                刊登日期：2023/07/05
              </div>
            </div>

            <div class="recruit_copywritings_paginations">
              <div class="icon" @click="movePage('prev')">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </div>

              <div
                v-for="num in 6"
                :key="num"
                :class="{
                  recruit_copywritings_pagination: true,
                }"
                @click="movePage('number', num + temp)"
              >
                {{ num }}
              </div>

              <div>...</div>

              <div class="icon" @click="movePage('next')">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </div>
            </div>
          </div>

          <div class="recruit_copywritings_aside">
            <h2 class="recruit_copywritings_aside_header">招募篩選</h2>

            <div class="recruit_copywritings_aside_filter">
              <div class="recruit_copywritings_aside_filter_title">
                接觸經歷
              </div>

              <div class="recruit_copywritings_aside_filter_groups">
                <div
                  v-for="index in 3"
                  :key="index"
                  class="recruit_copywritings_aside_filter_group"
                >
                  <div class="recruit_copywritings_aside_filter_checkbox">
                    <input type="checkbox" id="inexperienced" />
                    <label for="inexperienced"></label>
                  </div>
                  <div class="recruit_copywritings_aside_filter_type">
                    初心者
                  </div>
                  <div class="recruit_copywritings_aside_filter_count">7</div>
                </div>
              </div>
            </div>

            <div class="recruit_copywritings_aside_filter">
              <div class="recruit_copywritings_aside_filter_title">
                日期排序
              </div>

              <div class="recruit_copywritings_aside_filter_groups border-none">
                <div class="recruit_copywritings_aside_filter_group">
                  <div class="recruit_copywritings_aside_filter_checkbox">
                    <input type="checkbox" id="new" />
                    <label for="new"></label>
                  </div>
                  <div class="recruit_copywritings_aside_filter_type">
                    由新到舊
                  </div>
                </div>

                <div class="recruit_copywritings_aside_filter_group">
                  <div class="recruit_copywritings_aside_filter_checkbox">
                    <input type="checkbox" id="old" />
                    <label for="old"></label>
                  </div>
                  <div class="recruit_copywritings_aside_filter_type">
                    由舊到新
                  </div>
                </div>
              </div>
            </div>

            <div class="recruit_copywritings_aside_btns">
              <div class="recruit_copywritings_aside_btn">
                <button>
                  <router-link to="/recruitment/recruitment-post"
                    >招募球員</router-link
                  >
                </button>
              </div>
            </div>
          </div>
>>>>>>> Sherry
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
