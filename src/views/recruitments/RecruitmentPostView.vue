<template>
  <main class="recruitment_post">
    <div class="wrapper">
      <section class="recruitment_post_aside">
        <!-- <aside class="recruitment_post_aside"> -->
        <RecruitmentPostAside />
        <!-- </aside> -->
      </section>

      <main class="precruitment_post_main">
        <section class="recruitment_post_breadcrumb">
          <span>
            <router-link to="/recruitment">球隊徵人</router-link>
          </span>
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
          <span>新增職缺</span>
        </section>
      </main>
    </div>
  </main>
</template>

<script>
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";

export default {
  components: { RecruitmentPostAside },
};
</script>

<style lang="scss">
.recruitment_post {
  .wrapper {
    display: flex;
  }
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
}
</style>
