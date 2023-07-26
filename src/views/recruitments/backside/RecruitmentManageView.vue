<template>
  <div class="recruitment_post">
    <section class="recruitment_post_aside">
      <!-- <aside class="recruitment_post_aside"> -->
      <RecruitmentPostAside> </RecruitmentPostAside>
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
        <span>管理職缺</span>
      </section>

      <div class="recruitment_post_main_title">
        <div class="block"></div>
        <div>管理職缺</div>
      </div>
      <div class="recruitment_post_main_filter">
        <!--RecruitmentSearchbar.vue  -->
        <RecruitmentSearchbar :color="blue"> </RecruitmentSearchbar>
      </div>
      <div class="recruitment_post_main_table">
        <RecruitmentTable />
      </div>
      <div class="recruitment_post_main_page">
        <PaginationComponent
          :totalPages="computedTotalPages"
          type="BacksideRecruit"
        />
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
.recruitment_post {
  // 距離navbar
  // position: relative;
  // top: 6rem;
  // 距離navbar
  display: flex;

  // &_aside{

  // }
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
  &_main {
    width: 100%;
    padding: 2rem 5rem;
    // background-color: red;
    & > div {
      margin-bottom: 3rem;
    }
    &_title {
      display: flex;
      gap: 1.5rem;
      padding-bottom: 1rem;
      font-size: 2rem;
      color: var(--primary-blue);
      .block {
        width: 1rem;
        background-color: var(--primary-blue);
      }
    }
    &_filter {
    }
    &_page {
      margin-right: 0;
    }
  }
}
</style>
