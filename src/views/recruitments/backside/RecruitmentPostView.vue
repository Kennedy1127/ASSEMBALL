<template>
  <main class="recruitment_post">
    <section class="recruitment_post_aside">
      <!-- 側邊欄 -->
      <RecruitmentPostAside />
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
      <div class="recruitment_post_main_content">
        <div class="recruitment_post_main_content_form">
          <RecruitmentPostForm />
        </div>
        <div class="recruitment_post_main_content_pic">
          <img
            src="~@/assets/images/recruitment/Baseball-Park.png"
            alt="Baseball-Park"
          />
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import RecruitmentPostForm from "@/components/recruitments/backside/RecruitmentPostForm";

export default {
  components: { RecruitmentPostAside, RecruitmentPostForm },
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
    &_content {
      display: flex;
      justify-content: space-between;
    }
  }
}
@media screen and (max-width: 420px) {
  .recruitment_post {
    display: block;
  }
}
</style>
