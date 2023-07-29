<template>
  <AuthenticationWrapper>
    <AuthenticationPic :info="info" />

    <div class="authentication_steps">
      <div v-for="index in 3" :key="index" class="authentication_step">
        <div
          :class="{
            authentication_step_dot: true,
            'authentication_step_dot--active': index <= currentStep,
          }"
        ></div>
        <div
          :class="{
            authentication_step_line: true,
            'authentication_step_line--active': index <= currentStep,
          }"
        ></div>
      </div>
    </div>

    <ForgotPasswordStepOne
      v-if="currentStep === 1"
      @stepOneChecked="currentStep++"
    />
    <ForgotPasswordStepTwo v-if="currentStep === 2" />
  </AuthenticationWrapper>
</template>

<script setup>
import AuthenticationWrapper from "@/components/Authourize/AuthenticationWrapper.vue";
import AuthenticationPic from "@/components/Authourize/AuthenticationPic.vue";
import ForgotPasswordStepOne from "@/components/Authourize/ForgotPasswordStepOne.vue";
import ForgotPasswordStepTwo from "@/components/Authourize/ForgotPasswordStepTwo.vue";
import { ref } from "vue";

const info = {
  title: "That’s ok !",
  text: [
    "Recover your lost password",
    "And",
    "Return to the glory of the baseball field!",
  ],
  link: "Login",
  linkName: "登入",
  imgSrc: require("@/assets/images/authentication/PswForgot-bg.png"),
};

const currentStep = ref(1);
</script>

<style scoped lang="scss">
.authentication {
  &_steps {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 1;

    width: 96px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &_step {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_dot {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      background-color: var(--secondary-gray-3);

      &--active {
        background-color: var(--primary-blue);
      }

      &--middle {
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    &_line {
      width: 2px;
      height: 260px;
      background-color: var(--secondary-gray-3);

      &--active {
        background-color: var(--primary-blue);
      }
    }

    &:last-child {
      .authentication_step_line {
        display: none;
      }
    }
  }
}
</style>
