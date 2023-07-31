<template>
  <AuthenticationWrapper v-if="!store.state.isMobile">
    <AuthenticationPic :info="info" />

    <ForgotPasswordSteps :currentStep="1" />

    <div class="authentication_text">
      <div class="authentication_text_slogan">Forgot Password ?</div>
      <div class="authentication_text_title">忘記密碼</div>
      <div class="authentication_text_instructions">
        <div class="authentication_text_instructions_en">
          Enter the email address associated with your account.
        </div>
        <div class="authentication_text_instructions_ch">
          輸入與您的帳戶關聯的電子郵件地址。
        </div>
      </div>

      <div class="authentication_text_underline">
        <input type="email" placeholder="電子郵件/Email" />
      </div>

      <div class="authentication_text_btn">
        <button @click="checkStepOne">
          驗證信箱
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  </AuthenticationWrapper>

  <ForgotPasswordMobile v-if="store.state.isMobile" />
</template>

<script setup>
import AuthenticationWrapper from "@/components/Authentication/AuthenticationWrapper.vue";
import AuthenticationPic from "@/components/Authentication/AuthenticationPic.vue";
import ForgotPasswordSteps from "@/components/Authentication/ForgotPasswordSteps.vue";
import ForgotPasswordMobile from "@/components/Authentication/mobile/ForgotPasswordMobile.vue";
import useSendResetEmail from "@/composables/authentication/useSendResetEmail";
import { useStore } from "vuex";

const store = useStore();
const { sendResetEmail } = useSendResetEmail();

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

const handleSendResetEmail = () => {
  // currentStep.value++;

  sendResetEmail();
};
</script>

<style scoped lang="scss">
.authentication {
  &_text {
    width: 50%;
    padding: 5rem 2rem 5rem 6rem;
    background-color: var(--pale-white);
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--secondary-gray-1);

    &_slogan {
      font-weight: bolder;
      font-size: 2.5rem;
      color: var(--primary-blue);
      font-family: "Montserrat";
    }

    &_title {
      font-family: "Noto Sans TC";
      font-size: 1.5rem;
      padding: 1.25rem 0rem;
    }
    &_subtitle {
      font-size: 1.25rem;
    }
    &_codewrap {
      display: flex;
    }
    &_underline {
      border-bottom: solid 1px #000;
      color: var(--secondary-gray-1);
      padding: 0.25rem;

      &_code {
        margin: 2rem 0rem 0rem 2rem;
        line-height: 3rem;
        height: 3rem;
        padding: 0 24px;
        background-color: var(--secondary-blue-2);
        border-radius: var(--round);
        font-size: 1.25rem;
        color: var(--pale-white);
      }
    }
    &_underline:nth-child(2n + 1) {
      width: 50%;
      display: flex;
    }
    &_instructions_ch {
      font-size: 1rem;
    }

    &_instructions_en {
      font-size: 1rem;
      letter-spacing: initial;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 0.75rem;
    }

    input {
      border: 0;
      outline: none;
      padding-bottom: 0.25rem;
      width: 100%;
      margin: 2rem 0rem 0rem 0rem;
      font-size: 1rem;
      font-family: "Noto Sans TC";

      &::placeholder {
        color: var(--secondary-gray-3);
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    &_btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      position: absolute;
      top: 80%;
      left: 50%;
      transform: translateX(-50%);

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        width: 10rem;
        border-radius: 2rem;
        padding: 0.5rem 0.25rem;
        background-color: var(--primary-blue);

        color: var(--pale-white);
        font-size: 1.25rem;
        font-family: "Noto Sans TC";
        font-weight: 500;
        letter-spacing: 5px;
      }
    }

    .authentication_psw_error {
      width: 8rem;
      font-size: 1rem;
      color: var(--accent-red);
      text-align: center;
      // display: none;
    }
  }
}
</style>
