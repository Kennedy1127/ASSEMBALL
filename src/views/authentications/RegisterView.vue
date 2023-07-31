<template>
  <AuthenticationWrapper v-if="!store.state.isMobile">
    <AuthenticationPic :info="info" />

    <form class="authentication_text" @submit.prevent="handleSignup">
      <div class="authentication_text_slogan">Hello , Friend !</div>
      <div class="authentication_text_title">會員註冊/Sign Up</div>
      <div class="authentication_typing_name">
        <div class="authentication_typing_name_underline">
          <input type="text" placeholder="姓/Last Name" v-model="lastname" />
        </div>

        <div class="authentication_typing_name_underline">
          <input type="text" placeholder="名/First Name" v-model="firstname" />
        </div>
      </div>

      <div class="authentication_text_underline">
        <input
          type="text"
          placeholder="使用者名稱/User Name"
          v-model="username"
        />
      </div>

      <div class="authentication_text_underline">
        <input type="email" placeholder="電子郵件/Email" v-model="email" />
      </div>

      <div class="authentication_text_underline">
        <input
          type="password"
          placeholder="密碼/Password"
          v-model="password"
          ref="passwordInput"
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

      <div class="authentication_text_underline">
        <input
          type="password"
          placeholder="確認密碼/Confirm Password"
          v-model="confirmPassword"
          ref="confirmPasswordInput"
        />
        <font-awesome-icon
          v-if="showConfirmPassword"
          class="icon"
          icon="fa-solid fa-eye"
          @click="toggleShowConfirmPassword"
        />
        <font-awesome-icon
          v-if="!showConfirmPassword"
          class="icon"
          :icon="['fas', 'eye-slash']"
          @click="toggleShowConfirmPassword"
        />
      </div>

      <div class="authentication_text_btn">
        <button>
          註冊 <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
        <div v-if="signupError" class="authentication_psw_error">
          {{ signupError }}
        </div>
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
import useSetPersistence from "@/composables/authentication/useSetPersistence";
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const { signup } = useSignup();
const { changePersistence } = useSetPersistence();

const info = {
  title: "Welcome Back !",
  text: ["Are you ready", "to unleash the power of baseball?"],
  link: "Login",
  linkName: "登入",
  imgSrc: require("@/assets/images/authentication/sign-in-bg.jpg"),
};

const passwordInput = ref();
const confirmPasswordInput = ref();
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
  showPassword.value === true
    ? (passwordInput.value.type = "text")
    : (passwordInput.value.type = "password");
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
  showConfirmPassword.value === true
    ? (confirmPasswordInput.value.type = "text")
    : (confirmPasswordInput.value.type = "password");
};

const firstname = ref("");
const lastname = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const signupError = ref(null);

const checkFormat = () => {
  signupError.value = null;

  if (!firstname.value || !lastname.value)
    return (signupError.value = "請輸入你的姓名");

  if (!username.value) return (signupError.value = "請輸入你的使用者名稱");

  if (!email.value) return (signupError.value = "請輸入你的EMAIL");

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.value.match(validRegex))
    return (signupError.value = "EMAIL格式不符，請重新填寫");

  if (!password.value) return (signupError.value = "請輸入你的密碼");

  if (password.value.length < 6)
    return (signupError.value = "密碼至少需要6個字母或數字");

  if (!confirmPassword.value) return (signupError.value = "請填寫確認密碼");

  if (password.value !== confirmPassword.value)
    return (signupError.value = "密碼確認失敗，請重新確認");
};

const handleSignup = async () => {
  checkFormat();
  if (signupError.value) return;

  const signupData = {
    firstname: firstname.value,
    lastname: lastname.value,
    username: username.value,
    email: email.value,
    password: password.value,
  };

  await changePersistence();
  await signup(signupData);
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

      position: relative;

      .icon {
        position: absolute;
        bottom: 1rem;
        right: 0.25rem;
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

      width: 100%;

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
      width: 50%;
      font-size: 1rem;
      color: var(--accent-red);
      text-align: center;
      // display: none;
    }
  }
}
</style>
@/composables/authentication/useSignup
