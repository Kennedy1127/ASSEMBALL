<template>
  <main class="recruitment_post">
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
        <span>新增職缺</span>
      </section>

      <div class="recruitment_post_main_title">
        <div class="block"></div>
        <div>新增職缺</div>
      </div>
      <div class="recruitment_post_main_formItem">
        <label for=""></label>
        <input type="text" />
      </div>
      <!-- 組件 -->
      <!-- slot -->
      <!-- <template #title></template> -->

      <!-- 組件 -->
    </main>
  </main>
</template>

<script>
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import ProductPost from "@/views/products/ProductPost";

export default {
  components: { RecruitmentPostAside, ProductPost },
};
</script>

<style lang="scss">
.recruitment_post {
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
  }
}
</style>
