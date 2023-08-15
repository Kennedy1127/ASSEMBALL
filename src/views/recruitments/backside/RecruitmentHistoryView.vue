<template>
  <GobackAndTitle :title="title" />

  <div class="recruitment_post">
    <section class="recruitment_post_aside">
      <!-- <aside class="recruitment_post_aside"> -->
      <RecruitmentPostAside />
      <!-- </aside> -->
    </section>
    <main class="recruitment_post_main">
      <section class="recruitment_post_breadcrumb">
        <span>
          <router-link :to="{ name: 'Recruitments' }">球員招募</router-link>
        </span>
        <div class="icon">
          <font-awesome-icon
            icon="fa-solid fa-chevron-right"
            style="color: var(--primary-blue)"
          />
        </div>
        <span>紀錄管理</span>
      </section>

      <div class="recruitment_post_main_title">
        <div class="block"></div>
        <div style="font-weight: 600">紀錄管理</div>
      </div>

      <div class="recruitment_post_main_table" v-if="!isNoResults">
        <RecruitmentTable
          :tableData="computedRenderApplyRecords"
          :tablekey="tablekey"
          :title="title"
        >
        </RecruitmentTable>
      </div>
      <div class="no-data" v-else>
        <img src="~@/assets/images/recruitment/no-data.png" alt="no-data" />
      </div>
      <div class="recruitment_post_main_page">
        <PaginationComponent />
      </div>
    </main>
  </div>
</template>

<script setup>
import GobackAndTitle from "@/components/recruitments/backside/GobackAndTitle";
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import RecruitmentSearchbar from "@/components/recruitments/backside/RecruitmentSearchbar";
import RecruitmentTable from "@/components/recruitments/backside/RecruitmentTable";
import PaginationComponent from "@/components/utilities/PaginationComponent.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import getData from "@/composables/data/getData";
import { useRoute } from "vue-router";

const tablekey = ref(2);
const title = ref("記錄管理");
const isNoResults = computed(
  () => store.getters.VerifyApplyRecords.length === 0
);

//把抓到的內容放進表格內
const store = useStore();
const { getUser } = getData();
onMounted(async () => {
  const user = await getUser();
  store.dispatch("getApplyRecords", user.team_id); //用index.js的 action 要用dispatch
});

// 一頁放幾個項目
const computedRenderApplyRecords = computed(() => {
  const start = store.state.isMobile
    ? (store.state.curPage - 1) * 4
    : (store.state.curPage - 1) * 5;

  const end = store.state.isMobile
    ? store.state.curPage * 4
    : store.state.curPage * 5;

  return store.getters.VerifyApplyRecords.slice(start, end);
});
const computedTotalPages = computed(() => {
  // 計算總頁數
  if (store.state.getters.VerifyApplyRecords.length === 0) return 1;
  const len = store.getters.VerifyApplyRecords.length; //state :return的東西
  return store.state.isMobile
    ? len % 4 === 0 // 手機
      ? len > 4
        ? len / 4
        : 1
      : Math.ceil(len / 4)
    : len % 5 === 0 // 桌機板
    ? len > 5
      ? len / 5
      : 1
    : Math.ceil(len / 5);
});
//=======================
</script>

<style lang="scss">
.recruitment_post {
  margin-top: 6rem;
  display: flex;
  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;

    font-size: 1.25rem;

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      // text-decoration-thickness: 2px;
    }
  }
  &_goback {
    display: none;
  }
  &_main {
    width: 100%;
    padding: 2rem 5rem;
    // background-color: red;
    &_title {
      display: flex;
      gap: 1.5rem;
      padding-bottom: 1rem;
      font-size: 2rem;
      color: var(--primary-blue);
      &_sm {
        display: none;
      }
      .block {
        width: 1rem;
        background-color: var(--primary-blue);
      }
    }
    &_content {
      display: flex;
      gap: 4rem;
      &_form {
        width: 60%;
      }
      &_pic {
        width: 40%;
        position: relative;
        img {
          width: 100%;
        }
      }
    }
    .no-data {
      padding-top: 2rem;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .recruitment_post {
    margin: 0;
    display: block;

    &_breadcrumb {
      display: none;
    }
    &_main {
      padding: 1rem;
      &_title {
        display: none;
      }
      &_title_sm {
        display: block;
        margin-bottom: 3rem;
        text-align: center;
        font-size: 1.25rem;
        color: var(--primary-blue);
        position: relative;
      }
      &_title_sm::after {
        position: absolute;
        left: calc(50% - 1.25rem);
        top: 2.5rem;
        content: "";
        width: 2.5rem;
        height: 5px;
        background-color: var(--primary-blue);
      }
    }

    &_goback {
      margin-top: 6rem;
      display: block;
      // margin-bottom: 3rem;

      & a {
        display: inline-block;
        color: var(--primary-blue);
        font-size: 1.25rem;
        font-weight: 500;
        padding-bottom: 0.5rem;
        cursor: pointer;
        & span {
          color: var(--primary-blue);
          font-size: 1.25rem;
          padding-right: 0.5rem;
        }
      }
    }
    &_main {
      &_content {
        // display: flex;
        // gap: 4rem;
        &_form {
          width: 100%;
        }
        &_pic {
          display: none;
          // position: relative;
          // img {
          //   width: 100%;
          // }
        }
      }
    }
  }
}
</style>
