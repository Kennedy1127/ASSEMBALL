<template>
  <GobackAndTitle :title="title" />

  <main class="recruitment_post">
    <section class="recruitment_post_aside">
      <!-- 側邊欄 -->
      <RecruitmentPostAside />
    </section>
    <!-- <slot name="mainContent"> -->
    <main class="recruitment_post_main">
      <section class="recruitment_post_breadcrumb">
        <span>
          <router-link :to="{ name: 'Recruitments' }">球員招募</router-link>
        </span>
        <div class="icon">
          <span>
            <font-awesome-icon
              icon="fa-solid fa-chevron-right"
              style="color: var(--primary-blue)"
          /></span>
        </div>
        <span>新增職缺</span>
      </section>

      <div class="recruitment_post_main_title">
        <div class="block"></div>
        <div>新增職缺</div>
      </div>
      <div class="recruitment_post_main_content">
        <div class="recruitment_post_main_content_form">
          <RecruitmentPostForm />
        </div>
        <div class="recruitment_post_main_content_pic">
          <img src="~@/assets/images/recruitment/baseman-1.png" alt="player" />
          <img src="~@/assets/images/recruitment/baseman-2.png" alt="player" />
          <!-- <img
            src="~@/assets/images/recruitment/Baseball-Park.png"
            alt="Baseball-Park"
          /> -->
        </div>
      </div>
    </main>
    <!-- </slot> -->
  </main>
</template>

<script>
import GobackAndTitle from "@/components/recruitments/backside/GobackAndTitle";
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import RecruitmentPostForm from "@/components/recruitments/backside/RecruitmentPostForm";

export default {
  data() {
    return {
      title: "新增職缺",
    };
  },
  components: { GobackAndTitle, RecruitmentPostAside, RecruitmentPostForm },
};
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
      padding-bottom: 2rem;
      font-size: 2rem;
      font-weight: 600;
      color: var(--primary-blue);
      margin-bottom: 2rem;
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
        // background-color: var(--secondary-blue-4);
        // box-shadow: 50px 50px grey;
        // box-shadow: 10px 5px 50px var(--secondary-blue-3);
        width: 40%;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-evenly;

        position: relative;
        img {
          width: 100%;
          &:nth-child(2) {
            display: block;
            position: absolute;
            bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .recruitment_post_main_content_form {
    width: 100%;
  }
  .recruitment_post_main_content_pic {
    display: none;
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
      padding: 2rem;
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
      }
    }
  }
}
</style>
