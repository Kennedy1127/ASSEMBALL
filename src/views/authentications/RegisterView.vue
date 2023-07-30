<template>
  <AuthenticationWrapper v-if="!store.state.isMobile">
    <AuthenticationPic :info="info" />

    <form class="authentication_text" @submit.prevent="handleSignup">
      <div class="authentication_text_slogan">Hello , Friend !</div>
      <div class="authentication_text_title">會員註冊/Sign Up</div>
      <div class="authentication_typing_name">
        <div class="authentication_typing_name_underline">
          <input type="text" placeholder="姓/Last Name" />
        </div>

        <div class="authentication_typing_name_underline">
          <input type="text" placeholder="名/First Name" />
        </div>
      </div>

      <div class="authentication_text_underline">
        <input type="text" placeholder="使用者名稱/User Name" />
      </div>

      <div class="authentication_text_underline">
        <input type="email" placeholder="電子郵件/Email" />
      </div>

      <div class="authentication_text_underline">
        <input type="password" placeholder="密碼/Password" />
      </div>

      <div class="authentication_text_underline">
        <input type="password" placeholder="確認密碼/Confirm Password" />
      </div>

      <div class="authentication_text_btn">
        <button>
          註冊 <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
        <div class="authentication_psw_error">輸入錯誤!</div>
      </div>
    </form>
  </AuthenticationWrapper>

  <RegisterMobile v-if="store.state.isMobile" />
</template>

<script setup>
import AuthenticationWrapper from "@/components/Authentication/AuthenticationWrapper.vue";
import AuthenticationPic from "@/components/Authentication/AuthenticationPic.vue";
import RegisterMobile from "@/components/Authentication/mobile/RegisterMobile.vue";
import useSignup from "@/composables/authentication/useSignup";
import { useStore } from "vuex";

const store = useStore();
const { signup } = useSignup();

const info = {
  title: "Welcome Back !",
  text: ["Are you ready", "to unleash the power of baseball?"],
  link: "Login",
  linkName: "登入",
  imgSrc: require("@/assets/images/authentication/sign-in-bg.jpg"),
};

const handleSignup = () => {
  signup("test123@gmail.com", "123456");
};
</script>

<style scoped lang="scss">
.authentication {
  &_text {
    width: 50%;
    padding: 5rem 4rem;
    background-color: var(--pale-white);
    position: relative;

    &_slogan {
      text-align: center;
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

    &_underline {
      border-bottom: solid 1px black;
      color: var(--secondary-gray-1);
      padding: 0.25rem;
    }

    input {
      border: 0;
      outline: none;
      padding-left: 0.25rem;
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

    .authentication_typing_name {
      display: flex;
      justify-content: space-between;
      width: 100%;
      input {
        width: 100%;
        margin: 2rem 0rem 0rem 0rem;
      }
      &_underline {
        border-bottom: solid 1px #000;
        color: var(--secondary-gray-1);
        width: 45%;
        padding: 0.25rem;
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
        width: 10rem;
        border-radius: 2rem;
        padding: 0.5rem 0.25rem;
        background-color: var(--primary-blue);

        font-size: 1.25rem;
        font-weight: 500;
        color: var(--pale-white);
        letter-spacing: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
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
@/composables/authentication/useSignup
