<template>
  <div class="recruit_mobile_btns">
    <div class="recruit_mobile_btn">
      <button @click="$emit('openModal')">篩選</button>
    </div>
    <div class="recruit_mobile_btn">
      <button @click="goToRecruitmentBackside">招募球員</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToRecruitmentBackside = () => {
  router.push({ name: "recruitmentPost" });
};
</script>

<style scoped lang="scss">
.recruit_mobile {
  &_btns {
    margin: 2rem 0 3rem;
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
  }

  &_btn {
    button {
      width: 150px;
      height: 50px;

      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 5px;
      border-radius: 30px;

      background-color: transparent;

      @media all and (max-width: 375px) {
        width: 140px;
      }
    }

    &:first-child {
      button {
        color: var(--primary-blue);
        border: 2px solid var(--primary-blue);
      }
    }

    &:nth-child(2) {
      button {
        color: #fff;
        background-color: var(--primary-blue);
      }
    }
  }
}
</style>
