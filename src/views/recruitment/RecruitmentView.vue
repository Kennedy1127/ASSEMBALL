<template>
  <main class="recruit">
    <div class="recruit_landing">
      <div class="recruit_landing_filters wrapper">
        <div class="recruit_landing_filters_bar">
          <div class="recruit_landing_filter recruit_landing_filter--search">
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="magnifying-glass"
            />
            <input type="text" name="" id="" />
          </div>
          <div class="recruit_landing_filter recruit_landing_filter--role">
            <RecruitmentSelect placeholder="守備位置" type="role" />
          </div>
          <div class="recruit_landing_filter recruit_landing_filter--area">
            <RecruitmentSelect placeholder="地區" type="area" />
          </div>
        </div>

        <div class="recruit_landing_filters_btn">
          <button>搜尋</button>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="recruit_copywritings">
        <div class="recruit_copywritings_header">
          <div class="block"></div>
          <h2 class="recruit_copywritings_header_title">球隊招募</h2>
        </div>

        <div class="recruit_copywritings_content">
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
import RecruitmentSelect from "@/components/recruitment/RecruitmentSelect.vue";
import RecruitmentSwiper from "@/components/recruitment/RecruitmentSwiper.vue";

export default {
  components: { RecruitmentSelect, RecruitmentSwiper },

  data() {
    return {};
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

    &_filters {
      max-width: 1400px; // 1600? 1400? 1200?

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.25rem;

      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);

      &_bar {
        flex: 1;
        height: 60px;
        background-color: #fff;
        border-radius: var(--round);
        overflow: hidden;

        display: flex;
        align-items: center;
      }

      &_btn button {
        width: 200px;
        height: 60px;
        border-radius: var(--round);

        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 10.5px;
        color: var(--primary-blue);
      }
    }

    &_filter {
      height: 3rem;

      &--search {
        width: 60%;
        position: relative;

        .magnifying-glass {
          position: absolute;
          top: 50%;
          left: 1rem;
          transform: translateY(-50%);

          font-size: 2rem;
          color: var(--primary-blue);

          cursor: pointer;
        }

        input {
          width: 100%;
          height: 100%;
          border: none;
          padding-left: 4rem;

          font-size: 1.5rem;

          &:focus {
            outline: none;
          }
        }
      }

      &--role {
        flex: 1;
      }

      &--area {
        flex: 1;
      }
    }
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

    ///////////////////////////////////////////
    ///
    &_content {
      margin-top: 4rem;
      display: flex;
      gap: 1.5rem;
    }

    &_cards {
      flex: 1;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.5rem;
      row-gap: 3rem;
    }

    &_card {
      min-height: 400px;
      border: 3px solid var(--primary-blue);

      &_header {
        padding: 0.5rem 1rem;
        background-color: var(--primary-blue);

        font-size: 2rem;
        font-weight: 700;
        color: #fff;
      }

      &_content {
        padding: 1.25rem 1rem 0 1rem;
        color: var(--primary-blue);

        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      &_title {
        font-size: 1.5rem;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
      }

      &_exp,
      &_area {
        font-size: 1.25rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        &_block {
          width: 25px;
          height: 25px;
        }
      }

      &_exp {
        &_block {
          background-color: var(--accent-pink);
        }
      }

      &_area {
        &_block {
          background-color: var(--accent-yellow);
        }
      }

      &_border {
        margin: 1.25rem 1rem;
        height: 1px;
        background-color: var(--primary-blue);
      }

      &_footer {
        padding: 0 1rem;
        display: flex;
        gap: 1.25rem;
      }

      &_team {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        &_icon {
          width: 90px;
          height: 90px;
        }

        &_name {
          font-size: 1rem;
          font-weight: 500;
          color: var(--primary-blue);
        }
      }

      &_intro {
        flex: 1;
        color: var(--primary-blue);

        &_title {
          font-size: 1rem;
          font-weight: 700;
        }

        &_text {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
      }

      &_date {
        padding: 0 1rem 0.5rem;
        display: flex;
        justify-content: flex-end;

        font-size: 0.75rem;
        font-weight: 500;
        color: var(--primary-blue);
      }
    }

    ///////////////////////////////////////////
    ///
    &_aside {
      width: 24%;
      max-height: 600px;

      padding-left: 1.5rem;
      border-left: 2px solid var(--primary-blue);
      color: var(--primary-blue);

      &_header {
        font-size: 2rem;
        font-weight: 700;

        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--primary-blue);
      }

      &_filter {
        padding-top: 1.25rem;

        &_title {
          font-size: 1.5rem;
          font-weight: 700;
        }

        &_groups {
          margin-top: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--primary-blue);

          display: flex;
          flex-direction: column;
          gap: 1rem;

          &.border-none {
            border: none;
          }
        }

        &_group {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        &_checkbox {
          width: 25px;
          height: 25px;

          position: relative;

          input {
            display: none;
            &:checked + label {
              background-color: var(--primary-blue);
            }
          }

          label {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid var(--primary-blue);
          }
        }

        &_type {
          font-size: 1.25rem;
          font-weight: 500;
        }

        &_count {
          font-size: 1.25rem;
          font-weight: 500;
          margin-left: auto;
          margin-right: 1.5rem;
        }
      }

      &_btns {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        button {
          width: 140px;
          height: 50px;
          border-radius: 24px;

          font-family: "Noto Sans TC", sans-serif;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 5px;
          color: #fff;

          background-color: var(--primary-blue);
        }
      }
    }
    ///////////////////////////////////////////
    &_paginations {
      grid-column: 1/-1;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;

      font-family: "Noto Sans TC", sans-serif;
    }

    &_pagination {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;
      border-radius: 8px;

      font-size: 1.25rem;

      &--active {
        color: #fff;
        background-color: var(--error-yellow);
      }

      cursor: pointer;
    }

    .icon {
      cursor: pointer;
      color: var(--primary-blue);
      padding-right: 0.5rem;
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
