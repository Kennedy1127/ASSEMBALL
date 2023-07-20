<template>
  <main class="copywriting wrapper">
    <div class="copywriting_header">
      <div class="copywriting_header_info">
        <h2 class="copywriting_title">
          <div class="block"></div>
          召募{{
            $store.state.copywritingsCount === 0
              ? defaultCopywriting.copywriting_role
              : convertRole(computedCopywriting.copywriting_role)
          }}
        </h2>

        <div class="copywriting_header_info_date">
          -{{ convertDate(computedCopywriting.copywriting_date) }}
        </div>

        <div class="copywriting_header_info_exp">
          <div class="copywriting_header_info_exp_block"></div>
          {{ convertExp(computedCopywriting.copywriting_exp) }}
        </div>

        <div class="copywriting_header_info_area">
          <div class="copywriting_header_info_area_block"></div>
          {{ computedCopywriting.copywriting_area }}
        </div>
      </div>

      <div class="copywriting_header_intro">
        <h2 class="copywriting_title">
          <div class="block"></div>
          守備位置
        </h2>

        <p class="copywriting_header_intro_text">
          {{ convertRoleDesc(computedCopywriting.copywriting_role) }}
        </p>
      </div>

      <div class="copywriting_header_team">
        <div class="copywriting_header_team_icon">
          <img
            src="~@/assets/images/recruitment/team-icons/team-icon-1-lg.png"
            alt="team icon"
          />
        </div>
        <div class="copywriting_header_team_name">
          {{ computedCopywriting.copywriting_team_name }}
        </div>
        <div class="copywriting_header_team_btn">
          <router-link :to="{ name: 'Recruitments' }">更多球隊</router-link>
        </div>
      </div>
    </div>

    <div class="copywriting_content">
      <div class="copywriting_content_intro">
        <h2 class="copywriting_title">
          <div class="block"></div>
          {{ computedCopywriting.copywriting_team_name }}
        </h2>

        <h3 class="copywriting_content_intro_title">
          {{ computedCopywriting.copywriting_team_title }}
        </h3>

        <p class="copywriting_content_intro_text">
          {{ computedCopywriting.copywriting_team_intro }}
        </p>
      </div>

      <div class="copywriting_content_pic">
        <img
          src="~@/assets/images/recruitment/copywriting/copywriting.png"
          alt=""
        />
      </div>

      <div class="copywriting_content_btn">
        <button>
          應徵
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </button>
      </div>

      <div class="copywriting_content_warning">
        <button>
          <font-awesome-icon
            :icon="['fas', 'triangle-exclamation']"
            class="warning-icon"
          />
          檢舉球隊
        </button>
      </div>
    </div>

    <div class="copywriting_footer">
      <h2 class="copywriting_title">
        <div class="block"></div>
        相似職缺
      </h2>

      <div class="copywriting_footer_carousel">
        <copywritingSwiper />
      </div>
    </div>
  </main>
</template>

<script>
import copywritingSwiper from "@/components/recruitments/copywriting/copywritingSwiper.vue";
import roles from "@/composables/tables/roles";
import exps from "@/composables/tables/exps";
import roleDesc from "@/composables/tables/roleDesc";

export default {
  components: { copywritingSwiper },
  props: ["curHeight", "id"],

  beforeMount() {
    if (
      // 如果文案數量為0或是找不到該文案的話，重新撈資料
      this.$store.state.copywritingsCount === 0 ||
      this.$store.state.copywritings.find(
        (copywriting) =>
          copywriting.copywriting_id === Number(this.$route.params.id)
      )
    ) {
      this.$store.dispatch("getCopywritingsCount");
      this.$store.dispatch("getCopywritings");
    }
  },

  data() {
    return {
      defaultCopywriting: {
        copywriting_role: 5,
        copywriting_title: "尋找新星！現正招募有潛力的球員",
        copywriting_exp: 1,
        copywriting_area: "花蓮縣",
        copywriting_date: "2023-04-21T04:10:58.291Z",
        copywriting_team_name: "勇士隊",
        copywriting_team_icon: "https://picsum.photos/200/300",
        copywriting_team_title: "熱愛棒球：生活在球場上的我們",
        copywriting_team_intro:
          "喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵，喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵",
      },
    };
  },

  computed: {
    computedCopywriting() {
      const data = this.$store.state.copywritings.find(
        (copywriting) =>
          copywriting.copywriting_id === Number(this.$route.params.id)
      );

      if (data) {
        const {
          copywriting_role,
          copywriting_title,
          copywriting_exp,
          copywriting_area,
          copywriting_date,
          copywriting_team_name,
          copywriting_team_icon,
          copywriting_team_title,
          copywriting_team_intro,
        } = data;

        return {
          copywriting_role,
          copywriting_title,
          copywriting_exp,
          copywriting_area,
          copywriting_date,
          copywriting_team_name,
          copywriting_team_icon,
          copywriting_team_title,
          copywriting_team_intro,
        };
      }

      return this.defaultCopywriting;
    },
  },

  methods: {
    convertRole(role) {
      if (role || role === 0) return roles[role + 1].label;
    },

    convertExp(exp) {
      if (exp || exp === 0) return exps[exp];
    },

    convertRoleDesc(role) {
      if (role || role === 0) return roleDesc[role].desc;
    },

    convertDate(copywritingDate) {
      if (!copywritingDate) return;
      const date = new Date(copywritingDate);
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}.${String(date.getDate()).padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped lang="scss">
.copywriting.wrapper {
  padding-top: 3rem;
}
.copywriting {
  color: var(--primary-blue);
  .block {
    width: 1rem;
    height: 4rem;
    background-color: var(--primary-blue);
  }

  &_title {
    display: flex;
    align-items: center;
    gap: 3rem;

    font-size: 2.5rem;
    font-weight: 700;
  }

  &_header {
    margin-top: 8rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-blue);
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;

    &_info {
      width: 30%;

      display: flex;
      flex-direction: column;
      gap: 3rem;

      &_date {
        font-weight: 400;
      }

      &_exp,
      &_area {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        &_block {
          width: 40px;
          height: 40px;
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
    }

    &_intro {
      width: 50%;
      padding: 0 6rem;
      border-left: 1px solid var(--primary-blue);
      border-right: 1px solid var(--primary-blue);

      &_text {
        margin-top: 3rem;
      }
    }

    &_team {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;

      &_icon {
        width: 150px;
        height: 150px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &_name {
        margin-top: 2rem;
        font-weight: 400;
      }

      &_btn {
        margin-top: auto;

        a {
          width: 200px;
          height: 60px;
          border-radius: 100px;

          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          color: #fff;
          background-color: var(--primary-blue);

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  &_content {
    margin-top: 6rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-blue);

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;

    position: relative;

    &_intro {
      &_title {
        margin-top: 4rem;
        margin-bottom: 2.5rem;
        width: 80%;

        font-size: 1.5rem;
        font-weight: 500;

        line-height: 1.7;
      }

      &_text {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.7;
      }
    }

    &_btn {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        width: 200px;
        height: 60px;
        border-radius: 100px;
        background-color: var(--primary-blue);

        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
      }
    }

    &_warning {
      position: absolute;
      bottom: 1rem;
      right: 0;

      button {
        background-color: transparent;

        display: flex;
        align-items: center;
        gap: 1rem;

        font-size: 1.5rem;
        color: var(--warning-red);

        .warning-icon {
          font-size: 2rem;
        }
      }
    }
  }

  &_footer {
    margin: 6rem 0;

    &_carousel {
      margin-top: 6rem;
    }
  }
}
</style>
