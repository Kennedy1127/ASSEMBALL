<template>
  <div class="recruitment_post_goback">
    <router-link :to="{ name: 'Recruitments' }">
      <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
    </router-link>
  </div>
  <div class="recruitment_post_main_title_sm">{{ title }}</div>
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
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <span>審核應徵</span>
      </section>

      <div class="recruitment_post_main_title">
        <div class="block"></div>
        <div>審核應徵</div>
        <router-link :to="{ name: 'recruitmentVerifyDetail' }"
          >審核詳細頁</router-link
        >
      </div>
      <div class="recruitment_post_main_filter">
        <!--RecruitmentSearchbar.vue  -->
        <RecruitmentSearchbar />
      </div>
      <div class="recruitment_post_main_table">
        <RecruitmentTable />
      </div>
      <div class="recruitment_post_main_page">
        <ProductsMainPagination />頁碼待補
      </div>
    </main>
  </div>
</template>

<script setup>
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import RecruitmentSearchbar from "@/components/recruitments/backside/RecruitmentSearchbar";
import RecruitmentTable from "@/components/recruitments/backside/RecruitmentTable";
import PaginationComponent from "@/components/utilities/PaginationComponent.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

const title = ref("審核應徵");

const store = useStore();
onMounted(() => {
  store.dispatch("getManageCopywritings"); //用index.js的 action 要用dispatch
});
const computedTotalPages = computed(() => {
  // return 20;
  if (store.state.ManageCopywritings.length === 0) return 1;

  const len = store.state.ManageCopywritings.length; //state :return的東西
  return store.state.isMobile
    ? len % 4 === 0
      ? len > 4
        ? len / 4
        : 1
      : Math.ceil(len / 4)
    : len % 5 === 0
    ? len > 5
      ? len / 5
      : 1
    : Math.ceil(len / 5);
});
</script>

<style lang="scss">
// .recruitment_post {
//   margin-top: 6rem;
//   display: flex;

//   // &_aside{

//   // }
//   &_breadcrumb {
//     margin-bottom: 4rem;
//     display: flex;
//     gap: 1.5rem;

//     font-size: 1.25rem;

//     span:first-child a {
//       color: var(--primary-blue);
//       text-decoration: underline;
//       text-underline-offset: 4px;
//       // text-decoration-thickness: 2px;
//     }
//   }
//   &_main {
//     width: 100%;
//     padding: 2rem 5rem;
//     // background-color: red;
//     & > div {
//       margin-bottom: 3rem;
//     }
//     &_title {
//       display: flex;
//       gap: 1.5rem;
//       padding-bottom: 1rem;
//       font-size: 2rem;
//       color: var(--primary-blue);
//       .block {
//         width: 1rem;
//         background-color: var(--primary-blue);
//       }
//     }
//     &_filter {
//       width: 50%;
//     }
//     &_page {
//       margin-right: 0;
//     }
//   }
// }

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
  }
}
@media screen and (max-width: 420px) {
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
