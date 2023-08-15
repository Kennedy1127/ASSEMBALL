<template>
  <main class="copywriting wrapper">
    <div class="copywriting_header">
      <div class="bread_crumbs">
        <!--麵包屑 -->
        <router-link :to="{ name: 'Recruitments' }">球員招募 </router-link>
        <div class="bread_crumbs_arrow">
          <span> <font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
        </div>
        球隊資料
      </div>

      <div class="copywriting_header_info">
        <h2 class="copywriting_title">
          <div class="block"></div>
          召募{{ convertRole(copywriting.role) }}
        </h2>

        <div class="copywriting_header_info_date">
          -{{ convertDate(copywriting.date) }}
        </div>

        <div class="copywriting_header_info_exp">
          <div class="copywriting_header_info_exp_block"></div>
          {{ convertExp(copywriting.exp) }}
        </div>

        <div class="copywriting_header_info_area">
          <div class="copywriting_header_info_area_block"></div>
          {{ copywriting.area }}
        </div>
      </div>

      <div class="copywriting_header_intro">
        <h2 class="copywriting_title">
          <div class="block"></div>
          守備位置
        </h2>

        <p class="copywriting_header_intro_text">
          {{ convertRoleDesc(copywriting.role) }}
        </p>
      </div>

      <div class="copywriting_header_team">
        <div class="copywriting_header_team_icon">
          <img
            :src="
              copywriting.team_pic ||
              require('@/assets/images/recruitment/team-icons/team-icon-1-lg.png')
            "
            alt="team icon"
          />
        </div>
        <div class="copywriting_header_team_name">
          {{ copywriting.team_name }}
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
          {{ copywriting.team_name }}
        </h2>

        <h3 class="copywriting_content_intro_title">
          {{ copywriting.team_intro }}
        </h3>

        <p class="copywriting_content_intro_text">
          {{ copywriting.intro }}
        </p>
      </div>

      <div class="copywriting_content_pic">
        <img
          src="~@/assets/images/recruitment/copywriting/copywriting.png"
          alt=""
        />
      </div>

      <div class="copywriting_content_btn">
        <button @click="overlayIsOpen = true">
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
        <CopywritingSwiper :role="copywriting.role" />
      </div>
    </div>
  </main>

  <CopywritingSubmitApply
    v-if="overlayIsOpen"
    @closeOverlay="overlayIsOpen = false"
  />
</template>

<script setup>
import roles from "@/composables/tables/roles";
import exps from "@/composables/tables/exps";
import roleDesc from "@/composables/tables/roleDesc";
import getData from "@/composables/data/getData";
import useStorage from "@/composables/data/useStorage";
import CopywritingSubmitApply from "@/components/recruitments/copywriting/CopywritingSubmitApply.vue";
import CopywritingSwiper from "@/components/recruitments/copywriting/CopywritingSwiper.vue";
import { watchEffect, ref, provide } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { getDocument } = getData();
const { getPicsLink } = useStorage();

watchEffect(async () => {
  store.state.isPending = true;

  if (route.params.id) {
    const res = await getDocument("COPYWRITINGS", route.params.id);
    if (!res) {
      router.push({ name: "Home" });
    }

    const team = await getDocument("TEAMS", res.team_id);
    const pics = await getPicsLink(
      1,
      `images/TEAMS/${res.team_id}`,
      "team-pic"
    );

    copywriting.value = {
      ...res,
      team_name: team.teamName,
      team_intro: team.intro,
      team_pic: pics ? pics[0] : null,
    };
  }

  store.state.isPending = false;
});

const copywriting = ref({});

const overlayIsOpen = ref(false);

const convertRole = (role) => {
  if (role || role === 0) return roles[role + 1].label;
};

const convertExp = (exp) => {
  if (exp || exp === 0) return exps[exp];
};

const convertRoleDesc = (role) => {
  if (role || role === 0) return roleDesc[role].desc;
};

const convertDate = (copywritingDate) => {
  if (!copywritingDate) return;
  // 日期
  const date = new Date(copywritingDate.toDate());
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(date.getDate()).padStart(2, "0")}`;
};

provide("team_id", copywriting);
</script>

<style scoped lang="scss">
//手機版麵包屑
.bread_crumbs {
  display: none;
  @media all and (max-width: 420px) {
    display: flex;
    align-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    color: var(--primary-black);
    padding-bottom: 3rem;
    color: var(--secondary-gray-1);
  }

  a {
    @media all and (max-width: 420px) {
      display: block;
      font-size: 1rem;
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      padding-bottom: 0.2rem;
    }
  }
  .bread_crumbs_arrow {
    @media all and (max-width: 420px) {
      margin-top: 0.5rem;
      padding-bottom: 0.5rem;
      span {
        color: var(--primary-blue);
      }
    }
  }
}
.copywriting.wrapper {
  margin-top: 6rem;
  padding-top: 6rem;

  @media all and (max-width: 1280px) {
    max-width: 1200px;
  }

  @media all and (max-width: 420px) {
    padding: 2rem 2rem 0;
    margin-top: 4rem;
  }
}
.copywriting {
  color: var(--primary-blue);
  .block {
    width: 1rem;
    height: 4rem;
    background-color: var(--primary-blue);

    @media all and (max-width: 420px) {
      height: 3rem;
    }
  }

  &_title {
    display: flex;
    align-items: center;
    gap: 3rem;

    font-size: 2.5rem;
    font-weight: 700;

    @media all and (max-width: 420px) {
      gap: 1.5rem;
      font-size: 1.5rem;
    }
  }

  &_header {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-blue);
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;

    @media all and (max-width: 420px) {
      flex-direction: column;
    }

    &_info {
      width: 30%;

      display: flex;
      flex-direction: column;
      gap: 3rem;

      @media all and (max-width: 420px) {
        width: 100%;
        gap: 0;
      }

      &_date {
        font-weight: 400;

        @media all and (max-width: 420px) {
          font-size: 1.25rem;
          padding-left: 2.5rem;
          margin: 0.5rem 0 2rem;
        }
      }

      &_exp,
      &_area {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        @media all and (max-width: 420px) {
          font-size: 1.25rem;
        }

        &_block {
          width: 40px;
          height: 40px;

          @media all and (max-width: 420px) {
            width: 20px;
            height: 20px;
          }
        }
      }

      &_exp {
        @media all and (max-width: 420px) {
          margin-bottom: 1.5rem;
        }

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

      @media all and (max-width: 420px) {
        width: 100%;
        margin-top: 4rem;
        padding: 2rem 0;
        border: none;
        border-top: 1px solid var(--primary-blue);
        border-bottom: 1px solid var(--primary-blue);
      }

      &_text {
        margin-top: 3rem;

        @media all and (max-width: 420px) {
          font-size: 1rem;
          padding-bottom: 1rem;
        }
      }
    }

    &_team {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media all and (max-width: 420px) {
        margin-top: 3rem;
      }

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

        @media all and (max-width: 420px) {
          margin-bottom: 2rem;
        }
      }

      &_btn {
        margin-top: auto;
        width: 100%;

        a {
          display: block;
          margin: 0 auto;

          width: 200px;
          height: 60px;
          border-radius: 100px;

          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          color: #fff;
          background-color: var(--primary-blue);
          transition: all 0.09s ease-in-out;

          display: flex;
          align-items: center;
          justify-content: center;

          @media all and (max-width: 420px) {
            width: 80%;
            margin: 0 auto;
          }

          &:hover {
            background-color: var(--secondary-blue-1);
          }
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

    @media all and (max-width: 420px) {
      margin-top: 0;
      padding-top: 3rem;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    &_intro {
      &_title {
        margin-top: 4rem;
        margin-bottom: 2.5rem;
        width: 80%;

        font-size: 1.5rem;
        font-weight: 500;

        line-height: 1.7;

        @media all and (max-width: 420px) {
          margin: 1.5rem 0 2rem;
          font-size: 1rem;
        }
      }

      &_text {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.7;

        @media all and (max-width: 420px) {
          font-size: 1rem;
        }
      }
    }

    &_pic {
      @media all and (max-width: 420px) {
        img {
          width: 100%;
          height: 100%;
        }
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
        transition: all 0.09s ease-in-out;

        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;

        @media all and (max-width: 420px) {
          width: 100%;
          margin-bottom: 3rem;
        }

        &:hover {
          background-color: var(--secondary-blue-1);
        }
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

        @media all and (max-width: 420px) {
          font-size: 1rem;
          gap: 0.5rem;
        }

        .warning-icon {
          font-size: 2rem;

          @media all and (max-width: 420px) {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  &_footer {
    margin: 6rem 0;

    @media all and (max-width: 420px) {
      margin: 3rem 0;
    }

    &_carousel {
      margin-top: 6rem;

      @media all and (max-width: 420px) {
        margin-top: 4rem;
      }
    }
  }
}
</style>
