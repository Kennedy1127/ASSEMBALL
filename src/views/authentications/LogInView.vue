<template>
  <AuthenticationWrapper v-if="!store.state.isMobile">
    <form class="authentication_text" @submit.prevent="handleSignin">
      <div class="authentication_text_slogan">Welocom Back !</div>
      <div class="authentication_text_title">會員登入/Log In</div>
      <div class="authentication_text_subtitle">快速登入</div>
      <div class="authentication_text_quickLogin">
        <button class="authentication_text_quickLogin_FB">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
          <span>Facebook</span>
        </button>
        <button class="authentication_text_quickLogin_LINE">
          <font-awesome-icon class="icon" :icon="['fab', 'line']" />
          <span>Line</span>
        </button>
      </div>
      <fieldset>
        <legend>or</legend>
      </fieldset>

      <div class="authentication_text_underline">
        <input type="email" placeholder="電子郵件/Email" v-model="email" />
      </div>

      <div
        class="authentication_text_underline authentication_text_underline--psw"
      >
        <input
          type="password"
          placeholder="密碼/Password"
          ref="passwordInput"
          v-model="password"
        />
        <font-awesome-icon
          v-if="showPassword"
          class="icon"
          icon="fa-solid fa-eye"
          @click="toggleShowPassword"
        />
        <font-awesome-icon
          v-if="!showPassword"
          class="icon"
          :icon="['fas', 'eye-slash']"
          @click="toggleShowPassword"
        />
      </div>

      <div class="authentication_text_rememberPsw">
        <span class="authentication_text_rememberPsw_itemtext">
          <label class="authentication_text_rememberPsw_checkbox">
            <input type="checkbox" />
            <span>
              <font-awesome-icon icon="fa-solid fa-circle-check" />
            </span> </label
          >記住密碼</span
        >

        <span class="authentication_text_rememberPsw_item">
          <router-link :to="{ name: 'ForgotPassword' }"> 忘記密碼?</router-link>
        </span>
      </div>

      <div class="authentication_text_btn">
        <button>
          登入
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
        <div v-if="error" class="authentication_psw_error">
          {{ error }}
        </div>
      </div>
    </form>

    <AuthenticationPic :info="info" />
  </AuthenticationWrapper>

  <LoginMobile v-if="store.state.isMobile" />
</template>

<script setup>
import AuthenticationWrapper from "@/components/Authentication/AuthenticationWrapper.vue";
import AuthenticationPic from "@/components/Authentication/AuthenticationPic.vue";
import LoginMobile from "@/components/Authentication/mobile/LoginMobile.vue";
import useSignin from "@/composables/authentication/useSignin";
import useSetPersistence from "@/composables/authentication/useSetPersistence";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const { signinError, signin } = useSignin();
const { changePersistence } = useSetPersistence();

const info = {
  title: "Hello , Friend !",
  text: ["Welcome to our baseball family!"],
  link: "Register",
  linkName: "註冊",
  imgSrc: require("@/assets/images/authentication/log-in-bg.png"),
};

const passwordInput = ref();
const showPassword = ref(false);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
  showPassword.value === true
    ? (passwordInput.value.type = "text")
    : (passwordInput.value.type = "password");
};

const email = ref("");
const password = ref("");
const error = ref(null);

const checkFormat = () => {
  error.value = null;

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.value.match(validRegex))
    return (error.value = "EMAIL格式不符，請重新填寫");

  if (!password.value) return (error.value = "請輸入你的登入密碼");
};

const handleSignin = async () => {
  store.state.isPending = true;

  checkFormat();
  if (error.value) return (store.state.isPending = false);

  const signinData = {
    email: email.value,
    password: password.value,
  };

  await changePersistence();
  await signin(signinData);

  if (signinError.value) {
    error.value = "EMAIL或是密碼不符合規定，請重新確認您的EMAIL或密碼";
    return (store.state.isPending = false);
  }

  router.push({ name: "Home" });
  store.state.isPending = false;
};
</script>

<style scoped lang="scss">
.authentication {
  &_text {
    width: 50%;
    padding: 5rem 4rem;
    background-color: var(--pale-white);
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--secondary-gray-1);

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
      font-weight: 500;
      padding: 1.25rem 0rem;
    }

    &_subtitle {
      font-size: 1.25rem;
    }

    &_underline {
      border-bottom: solid 1px black;
      color: var(--secondary-gray-1);
      padding: 0.25rem;
      margin-top: 2rem;

      position: relative;

      .icon {
        position: absolute;
        top: 50%;
        right: 0.25rem;
        transform: translateY(-50%);
        color: var(--secondary-blue-1);
        cursor: pointer;
      }
    }

    input {
      border: 0;
      outline: none;
      padding-left: 0.25rem;
      padding-bottom: 0.25rem;
      width: 100%;
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

    fieldset {
      border: none;
      border-top: 1px solid var(--secondary-blue-2);
      legend {
        text-align: center;
        color: var(--secondary-blue-2);
        padding: 0 1rem;
      }
    }

    &_quickLogin {
      display: flex;
      gap: 2rem;
      margin: 1.5rem 0;

      button {
        width: 50%;
        height: 50px;
        border-radius: var(--round);
        color: var(--pale-white);
        font-size: 1.5rem;
        font-weight: 600;
        font-family: "Montserrat";

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .icon {
          position: absolute;
          left: 0.875rem;
        }
      }

      &_LINE {
        background-color: #1dcb42;
      }
      &_FB {
        background-color: #1a76f2;
        span {
          margin-left: 1.875rem;
        }
      }
    }

    &_rememberPsw {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      font-size: 1.25rem;
      color: var(--secondary-gray-1);
      &_itemtext {
        label {
          margin-right: 0.5rem;
        }
      }
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"]:checked + span {
        color: var(--primary-blue);
      }
      a {
        color: gray;
        text-decoration: dashed;
      }
    }

    &_btn {
      // margin-top: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      position: absolute;
      top: 80%;
      left: 50%;
      transform: translateX(-50%);

      width: 100%;

      button {
        width: 10rem;
        border-radius: 2rem;
        padding: 0.5rem 0.25rem;
        color: var(--pale-white);
        font-size: 1.25rem;
        background-color: var(--primary-blue);
        font-family: "Noto Sans TC";
        font-weight: 500;
        letter-spacing: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }

    .authentication_psw_error {
      width: 50%;
      font-size: 1rem;
      color: var(--accent-red);
      text-align: center;
      // display: none;
    }
  }
}
</style>
