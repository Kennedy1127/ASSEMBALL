<template>
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

<script>
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import RecruitmentSearchbar from "@/components/recruitments/backside/RecruitmentSearchbar";
import RecruitmentTable from "@/components/recruitments/backside/RecruitmentTable";
import ProductsMainPagination from "@/components/products/productsItems/ProductsMainPagination";
export default {
  components: {
    RecruitmentPostAside,
    RecruitmentSearchbar,
    RecruitmentTable,
    ProductsMainPagination,
  },
};
</script>

<style lang="scss">
.recruitment_post {
  margin-top: 6rem;
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
      width: 50%;
    }
    &_page {
      margin-right: 0;
    }
  }
}
</style>
